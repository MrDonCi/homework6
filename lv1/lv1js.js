const API = 'https://music.niubishanshan.top/api/v2/music/search/'

const go = document.querySelector(".go");

const text = document.querySelector('.text');

const oul = document.querySelector(".search");

go.addEventListener('click', () => {
    const kw = text.value;

    const request = new XMLHttpRequest();

    request.open('GET', API + kw, true);

    request.onreadystatechange = function() {

        if (request.readyState === 4) {

            if (request.status >= 200 && request.status < 300) {

                const json = JSON.parse(request.responseText);

                const { data } = json;

                const { songList } = data;

                const idList = songList.map(e => e.songName);

                const html = idList.map(str => `<li> ${ str } </li>`).join("");

                console.log(html)

                oul.innerHTML = html;

                console.log('请求成功');

            } else {

                console.log('请求错误');

            }

        }

    }
    request.send()
})