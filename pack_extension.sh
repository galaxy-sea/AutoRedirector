#!/bin/bash

# 获取当前目录路径
EXT_DIR=$(cd "$(dirname "$0")" && pwd)

# 生成 YYYY.MM.DD.HH.MM 格式的时间戳
VERSION=$(date +%y.%-m%d.1%H%M)


# 颜色输出
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

# 选择浏览器类型
echo "请选择要打包的插件类型："
echo "0) 全部打包"
echo "1) Chrome"
echo "2) Firefox"
echo "9) 删除打包文件"
read -p "输入选项: " BROWSER_CHOICE

# 定义打包函数
pack_extension() {
  local BROWSER_NAME=$1
  local MANIFEST_FILE=$2
  local ZIP_NAME="extension_${BROWSER_NAME}.zip"

  echo "🔹 正在打包 ${BROWSER_NAME} 插件..."
  cp "$EXT_DIR/$MANIFEST_FILE" "$EXT_DIR/manifest.json"

  # 确保 manifest.json 存在
  if [ ! -f "$EXT_DIR/manifest.json" ]; then
      echo -e "${RED}❌ 错误: manifest.json 未找到！${NC}"
      exit 1
  fi

  # 更新 manifest.json 的 version
  sed -i '' "s/\"version\": *\"[0-9\.]*\"/\"version\": \"$VERSION\"/" "$EXT_DIR/manifest.json"

  # 开始打包 ZIP（排除不必要文件）
  zip -r "$ZIP_NAME" . -x "*.zip" "node_modules/*" ".git/*" ".DS_Store" ".github/*" ".vscode/*" ".idea/*" ".cache/*" "doc/*" ".gitignore" "pack_extension.sh"

  # 结果输出
  if [ -f "$ZIP_NAME" ]; then
      echo -e "${GREEN}✅ ${BROWSER_NAME} 插件打包成功！文件名: $ZIP_NAME  版本号: $VERSION${NC}"
  else
      echo -e "${RED}❌ ${BROWSER_NAME} 插件打包失败！${NC}"
  fi
}

delete_zip_file() {
  rm extension_Chrome.zip extension_Firefox.zip manifest.json
}

# 根据用户选择执行打包
case $BROWSER_CHOICE in
  0)
    echo "🔄 开始打包所有浏览器插件..."
    pack_extension "Chrome" "manifest-chrome.json"
    pack_extension "Firefox" "manifest-firefox.json"
    ;;
  1)
    pack_extension "Chrome" "manifest-chrome.json"
    ;;
  2)
    pack_extension "Firefox" "manifest-firefox.json"
    ;;
  9)
    delete_zip_file
    ;;
  *)
    echo -e "${RED}❌ 无效的选项！请重新运行脚本并输入。${NC}"
    exit 1
    ;;
esac
