---
title: macOS 自用配置
pubDatetime: 2022-03-27T22:59:11+08:00
description: macOS 自用配置
---

### macOS 自用配置

#### 开发环境

最先安装完成 Xcode，然后

```sh
xcode-select --install
```

#### 安装初始软件

浏览器——Google Chrome

终端——iTerm2

#### 安装 homebrew（清华源）

设置环境变量

```sh
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_PIP_INDEX_URL="https://pypi.tuna.tsinghua.edu.cn/simple"
```

初次安装使用 jsDelivr CDN 下载

```sh
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/Homebrew/install@HEAD/install.sh)"
```

#### brew 安装常用软件

clashx、visual-studio-code、clion、docker、multipass、typora、notion、obsidian、telegram、google-chrome、termius、1password

#### brew 安装常用工具

node、yarn、ccls、fzf、fd、ranger、zoxide、thefuck、neovim、bash-language-server、bat、cmake、cocoapods、exa、go、gopls、hugo、ripgrep、rust-analyzer、shfmt、starship、yaml-language-server、taplo、helix、git-delta、gitui、just、navi、prettier、cbindgen、tldr、tokei、typescript、vhs、flutter、marksman、lua、lua-language-server、vint、markdownlint-cli2、stylua、1password-cli

> 其中 llvm 需要 link，以使用 llvm 中的 clang-format、lldb-vscode

```sh
brew link llvm --force
```

> 其中 python 需要 unlink，以使用 Xcode 中的 python

```sh
brew unlink python
```

#### 升级 pip（python 使用 Xcode 中的）

```sh
/Applications/Xcode.app/Contents/Developer/usr/bin/python3 -m pip install --upgrade pip
```

升级后会在当前用户下生成 pip PATH，将 PATH 加入到系统 PATH 中

#### 配置 pip 源（清华源）

```sh
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 安装 pygments、pynvim、black

```sh
pip install pygments
pip install pynvim
pip install black
```

#### 配置 npm、yarn 源（阿里源）

```sh
npm config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmmirror.com
```

#### 安装字体

```sh
brew tap homebrew/cask-fonts
brew install --cask font-sauce-code-pro-nerd-font
```

#### 配置 git

```sh
git config --global user.name "xhwhis"
git config --global user.email "hi@whis.me"
git config --global pull.rebase false
```

编辑~/.gitconfig（[详见](https://github.com/xhwhis/config/blob/master/gitconfig)）

编辑~/.gitigrone_global（[详见](https://github.com/xhwhis/config/blob/master/gitigrone_global)）

#### 配置 git-commit

##### commitizen

```sh
yarn global add commitizen
```

##### commitlint、cz-conventional-changelog

```sh
yarn global add @commitlint/cli @commitlint/config-conventional
yarn global add cz-conventional-changelog
```

编辑~/.commitlintrc.js（[详见](https://github.com/xhwhis/config/blob/master/commitlintrc.js)）

```js
module.exports = { extends: ["@commitlint/config-conventional"] };
```

编辑~/.czrc（[详见](https://github.com/xhwhis/config/blob/master/czrc)）

```
{ "path": "cz-conventional-changelog" }
```

##### lint-staged

```sh
yarn global add lint-staged
```

编辑~/.lintstagedrc.json（[详见](https://github.com/xhwhis/config/blob/master/lintstagedrc.json)）

```json
{
  "*.{yml, yaml, json, xml}": "prettier --ignore-unknown --write",
  "*.md": "markdownlint-cli2 --fix"
}
```

##### husky

```sh
yarn global add husky
```

#### 安装 Rust（<https://rsproxy.cn/）>

```sh
curl --proto '=https' --tlsv1.2 -sSf https://rsproxy.cn/rustup-init.sh | sh
```

default toolchain 选择 nightly，profile 选择 complete

#### 配置 crates.io 源

编辑~/.cargo/config（[详见](https://github.com/xhwhis/config/blob/master/cargo.toml)）

#### 配置 go 源（<https://goproxy.cn/）>

```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

#### 配置 starship

编辑~/.config/starship.toml（[详见](https://github.com/xhwhis/config/blob/master/starship.toml)）

```toml
# Get editor completions based on the config schema
"$schema" = 'https://starship.rs/config-schema.json'

command_timeout = 4000

# Disable the package module, hiding it from the prompt completely
[package]
disabled = true
```

#### 配置 helix

构建 tree-sitter

```sh
hx --grammar fetch
hx --grammar build
```

配置 helix config

编辑~/.config/helix/config.toml（[详见]()）

#### 配置 LunarVim

##### 安装 LunarVim

```sh
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
```

##### 配置 LunarVim

```sh
git clone git@github.com:xhwhis/lvim.git .config/lvim
```

#### 配置 zsh

##### 安装 ohmyzsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

##### 配置 ohmyzsh 源（清华源）

```sh
git -C $ZSH remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
git -C $ZSH pull
```

##### 下载 ohmyzsh plugin

```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open
```

##### 配置 zshrc（[详见](https://github.com/xhwhis/config/blob/master/zshrc)）

###### 自用主题（[dracula](https://draculatheme.com/zsh)）

###### 自用插件

```sh
plugins=(git zsh-autosuggestions zsh-syntax-highlighting zoxide web-search extract last-working-dir sudo pip thefuck colored-man-pages colorize safe-paste git-open vi-mode copyfile copypath gitfast command-not-found history)
```

###### aliases

```sh
alias vim="lvim"
alias vi="nvim"
alias python="python3"
alias pip="pip3"
alias rm="rm -i"
alias cp="cp -i"
alias cls="clear"
alias ls="exa --git"
alias tree="exa --tree"
alias cat="bat --theme=Dracula"
alias find="fd"
alias ra="ranger"
alias cd..="cd .."
alias proxy="export https_proxy=http://127.0.0.1:8234;export http_proxy=http://127.0.0.1:8234;export all_proxy=socks5://127.0.0.1:8235"
alias unproxy="unset https_proxy http_proxy all_proxy"
alias -s c=copyfile
alias -s cpp=copyfile
```

###### brew zsh completion

在`source $ZSH/oh-my-zsh.sh`前添加

```sh
FPATH="$(brew --prefix)/share/zsh/site-functions:${FPATH}"
```

```sh
brew completions link
```

###### homebrew 环境参数

```sh
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_PIP_INDEX_URL="https://pypi.tuna.tsinghua.edu.cn/simple"
export HOMEBREW_UPGRADE_GREEDY=1
```

###### rustup 环境参数

```sh
export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
```

###### flutter 环境参数

```sh
export PUB_HOSTED_URL="https://pub.flutter-io.cn"
export FLUTTER_STORAGE_BASE_URL="https://storage.flutter-io.cn"
```

###### 其他配置参数

```sh
export FZF_DEFAULT_OPTS="--color=fg:#f8f8f2,bg:#282a36,hl:#bd93f9 --color=fg+:#f8f8f2,bg+:#44475a,hl+:#bd93f9 --color=info:#ffb86c,prompt:#50fa7b,pointer:#ff79c6 --color=marker:#ff79c6,spinner:#ffb86c,header:#6272a4"

eval $(thefuck --alias)
eval "$(op completion zsh)" && compdef _op op
eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
```

#### dracula 主题（<https://draculatheme.com/）>

iTerm2（<https://draculatheme.com/iterm）>
