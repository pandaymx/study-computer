# 权限管理

## 用户与组

- 用户 (User)：系统中的账号，拥有唯一 UID。
- 组 (Group)：用户集合，用于统一管理权限。

## 文件权限

- 权限类型：读 (r)、写 (w)、执行 (x)。
- 三种主体：所有者 (u)、同组 (g)、其他人 (o)。
- 使用 `ls -l` 查看权限，用 `chmod` 修改。

```bash
# 赋予所有者可执行权限
chmod u+x script.sh
```

## sudo 与提权

- `sudo`：以另一个用户（默认为 root）身份执行命令。
- `/etc/sudoers`：配置哪些用户或组可使用 sudo。

```bash
# 以 root 身份安装软件
sudo apt install vim
```

## 常见问题

- 无法 sudo：确认用户在 sudoers 或属于 sudo 组。
- 文件权限错误：使用 `ls -l` 检查并 `chmod`/`chown` 修复。
