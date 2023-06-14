
// gives youtube data response
const getYouTubeVideoData = async (videoId) => {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    const html = await response.text();
    const ytInitialPlayerResponse = JSON.parse(html.split('ytInitialPlayerResponse = ')[1].split(`;var meta = document.createElement('meta')`)[0]);
    return ytInitialPlayerResponse;
}


// function that converts time format to seconds
const hmsToSecondsOnly = (str) => {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s; // "01:22:20 time format"
}

// function that gets percentage
const getPercentage = (x, y) => (x / y) * 100;


// gets video details
const getVideoInfo = async () => {
    const videoId = document.location.href.split('?v=')[1]
    const data = await getYouTubeVideoData(videoId)
    const desc = data.videoDetails.shortDescription
    const videoLength = data.videoDetails.lengthSeconds
    const descList = desc.split('\n')
    let arr = []

    descList.forEach((item, i) => {
        const splitItem = item.split(':')
        if (splitItem.length >= 2 && !isNaN(splitItem[0]) && !isNaN(splitItem[1].slice(0, 2))) {
            const timeInSeconds = hmsToSecondsOnly(item.split(' ')[0])
            arr.push({
                "time": item.split(' ')[0],
                "timeInSeconds": hmsToSecondsOnly(item.split(' ')[0]),
                "timePercentage": `${getPercentage(timeInSeconds, videoLength)}%`,
                "timeStampTitle": item.split(' ').slice(1).join(' ')
            })
        }
    })
    if (arr.length > 0 && arr[0].timeInSeconds != 0) {
        arr.unshift({
            "time": '00:00',
            "timeInSeconds": 0,
            "timePercentage": `${0}%`,
            "timeStampTitle": 'Intro'
        })
    }
    return arr
}



window.addEventListener("keydown", async (e) => {
    const href = document.location.href

    // if there's chapterDetails and href is not the same as previous href
    if (localStorage.getItem('chapterDetails') && localStorage.getItem('href') && localStorage.getItem('href') != href) {
        localStorage.removeItem('chapterDetails')
        const chapterContainer = document.getElementsByClassName("chapter-container")
        if (chapterContainer && chapterContainer.length > 0) {
            for (let i = 0; i < chapterContainer.length; i++) chapterContainer[i].remove()
        }
        localStorage.setItem('href', href)
    }
    if (href.includes("watch?")) {
        let chapterDetails
        if (!localStorage.getItem('href')) {
            localStorage.setItem('href', href)
        }
        if (!localStorage.getItem('chapterDetails')) {
            localStorage.setItem('chapterDetails', JSON.stringify(await getVideoInfo()))
        }

        chapterDetails = JSON.parse(localStorage.getItem('chapterDetails'))

        // if chapterDetails is empty or has no chapters
        if (!chapterDetails || chapterDetails.length < 0) {
            localStorage.removeItem('chapterDetails')
            return
        }

        const progress = document.getElementsByClassName("ytlr-progress-bar__ticks")[0]
        const slider = document.getElementsByClassName("ytlr-progress-bar__slider")[0]
        const video = document.getElementsByTagName("video")[0]
        const chapterThunbnail = document.getElementsByClassName('ytlr-storyboard__container')[0]

        if (slider) {
            setTimeout(() => {
                if (video.paused) {
                    chapterDetails.forEach((item, i) => {
                        // Creates chapter marks
                        const chapter = document.createElement("div");
                        chapter.classList.add("chapter-container");
                        chapter.style.left = item.timePercentage
                        progress.appendChild(chapter);

                        // creates chapter name
                        const chapterName = document.createElement("div");
                        chapterName.classList.add('chapter-name')
                        chapterName.innerHTML = item.timeStampTitle
                        const currentTime = () => hmsToSecondsOnly(chapterThunbnail.children[1].innerHTML)

                        if (chapterThunbnail) {
                            chapterThunbnail.style.position = "relative"
                            chapterThunbnail.style.bottom = "30px"
                            chapterThunbnail.style.height = 'max-content'
                        }


                        //  checks first index and if currentTime is less than start of next chapter
                        if (chapterThunbnail && i === 0 && currentTime() < chapterDetails[i + 1].timeInSeconds) {
                            chapterThunbnail.prepend(chapterName)
                        }

                        // checks if last index and if currentTime is longer than the start of last chapter
                        else if (chapterThunbnail && i === chapterDetails.length - 1 && currentTime() > item.timeInSeconds) {
                            chapterThunbnail.prepend(chapterName)
                        }

                        // Checks if first nor last index is here to get both previous and next chapter
                        else if (chapterThunbnail && i != chapterDetails.length - 1 && i != 0 && currentTime() > chapterDetails[i - 1].timeInSeconds && currentTime() < chapterDetails[i + 1].timeInSeconds && currentTime() > item.timeInSeconds) {
                            chapterThunbnail.prepend(chapterName)
                        }
                    })
                }
            }, 550)
        }
    }

}, true)