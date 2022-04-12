function ImgPic() {
    const video= document.getElementById('video');
    function cam(){

        navigator.mediaDevices.getUserMedia({
                audio:false,
                video:true}).then(stream=>{video.srcObject=stream;}).catch((console.error))
        }

    window.addEventListener('load',cam,false);
    return (
        <button onClick={()=>cam}>
k
        </button>
    )
}
export default ImgPic;