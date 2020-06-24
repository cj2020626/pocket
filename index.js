//U:表示这个文件未被跟踪
//A:表示这个文件已经添加到最总文件
//M:表示这个文件已经被修改了



//设置全局用户名,邮箱配置
// git config --global user.name 
//git config --global user.eamil


//查看全部全局配置
//git config --list --global 

//获取config帮助信息
//git config -h


//获取git仓库的两种方式：
//将本地文件转化成仓库  git init
//克隆(clone)


//查看当前文件状态
// git status
//精简方式显示当前文件状态
// git status -s


//添加追踪文件(一个一个添加)，使用次数多
//git add index.html(文件名)
//一次性全部添加
// git add .


//提交更新
//git commit -m "提交信息描述"