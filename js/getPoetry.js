odescription = document.getElementsByClassName('description')[0]
// odescription = document.getElementById('main-title')

poetryurl = 'https://v1.jinrishici.com/all.svg'
// 封装ajax
function sendAjax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.readyState)
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (typeof xhr.response == 'string') {
                        resolve(xhr.response)
                    } else {
                        resolve(JSON(xhr.response))
                    }
                } else {
                    reject('调用失败')
                }
            }
        }
    })
}

async function poetry(url) {
    try {
        let res = await sendAjax(url)
        console.log(res);
        odescription.innerHTML = res
    } catch (error) {
        console.log(error);
    }
}

poetry(poetryurl)