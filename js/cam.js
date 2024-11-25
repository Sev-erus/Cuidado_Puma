	var video = document.getElementById('video');

	navigator.mediaDevices.getUserMedia({ video: true }).then((stream)=>{
		console.log(stream)

		video.srcObject = stream;

	}).catch((err)=> console.log(err));