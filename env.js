Papa.parse('//pud-x.bj.bcebos.com/data.csv', {
    download: true,
    header: true,
    complete: function (results, file) {
        csvData = results.data;
        console.log(csvData);
    }
})
function findTypeByName() {
    const name = document.getElementById("ClassName").value
    if (name === '') {
        var insertDiv = document.getElementById("Final")
        insertDiv.innerHTML = '<div class="notification is-primary">你还啥都没输呢（<br><a><img src="ha.png" /></a></div>'
        return false;
    }
    const fuse = new Fuse(csvData, {
        keys: ['class', 'className','任课教师','主讲教师','管理单位'],
        minMatchCharLength: 2,
    })
    const FinalJson = fuse.search(name)
    console.log(name)
    console.log(FinalJson)
    var Finaled = ''
    for (var i=0;i<FinalJson.length;i++) {
    console.log(i)
    Final = '<span class="tag is-danger">' + (FinalJson[i].item.className) + '</span><br>' + (FinalJson[i].item.管理单位) + '<br>任课教师：' + (FinalJson[i].item.任课教师) + '<br>主讲教师：' + (FinalJson[i].item.主讲教师) + '<br>' + (FinalJson[i].item.type) + '<br>' + (FinalJson[i].item.group) + '<br>' + (FinalJson[i].item.comments) + '<br>'
    console.log(Final)
    Finaled = Finaled + '' + Final 
    }
    document.getElementById("Final").innerHTML = '<div class="notification is-primary"><span class="tag is-info">找到' + FinalJson.length + '个结果</span><br><br>' + Finaled + '</div>'
    return false;
}