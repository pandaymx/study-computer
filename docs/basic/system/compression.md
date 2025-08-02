# 压缩与解压

## 常见格式

- ZIP：Windows、macOS 原生支持
- TAR.GZ：Linux 下常用的归档与压缩格式
- RAR：常用的压缩格式，需要额外工具
- 7Z：高压缩比格式，开源工具支持

## 命令行工具

```bash
# 打包并压缩为 tar.gz
tar -czvf archive.tar.gz folder/
# 解压 tar.gz
tar -xzvf archive.tar.gz

# 压缩 zip
zip -r archive.zip folder/
# 解压 zip
unzip archive.zip
```

## GUI 工具

- Windows：WinRAR、7-Zip
- macOS：The Unarchiver、Keka
- Linux：File Roller、Ark 等图形界面压缩管理器

## 使用建议

- 根据文件类型与兼容性选择格式。
- 大型文件建议使用 TAR.GZ 或 7Z 获得更高压缩率。
- 打包归档时注意文件权限信息（tar.gz 支持保留权限）。
