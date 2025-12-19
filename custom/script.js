const hoverVideo = document.querySelector('.hover-container');

if(hoverVideo){
    const video = hoverVideo.querySelector('.hover-video');
    const image = hoverVideo.querySelector('.hover-img');

    // ホバー時の挙動
    hoverVideo.addEventListener('click',()=>{
        // 画像を消して、動画を表示
        image.style.display = 'none';
        video.style.display = 'block';

        // 動画を先頭から再生
        video.currentTime = 0;
        video.play();
    });

}