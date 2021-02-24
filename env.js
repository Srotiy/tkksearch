Papa.parse('https://pud-x.bj.bcebos.com/data.csv', {
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
        keys: ['class', 'className','管理单位'],
        minMatchCharLength: 2
    })
    const FinalJson = fuse.search(name)
    console.log(name)
    console.log(FinalJson)
    var Finaled = ''
    for (var i=0;i<FinalJson.length;i++) {
    console.log(i)
    Final = '<span class="tag is-danger">' + (FinalJson[i].item.className) + '</span><br>' + (FinalJson[i].item.type) + '<br>' + (FinalJson[i].item.group) + '<br>' + (FinalJson[i].item.comments) + '<br>'
    console.log(Final)
    Finaled = Finaled + '' + Final 
    }
    var insertDiv = document.getElementById("Final")
    insertDiv.innerHTML = '<div class="notification is-primary">' + Finaled + '</div>';
}