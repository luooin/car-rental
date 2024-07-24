const base = {
    get() {
                return {
            url : "http://localhost:8080/carrental/",
            name: "carrental",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/carrental/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网上租车系统"
        } 
    }
}
export default base
