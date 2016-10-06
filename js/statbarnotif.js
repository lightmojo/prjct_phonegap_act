function sendNotification(msg) {
	var message = document.getElementById("message");
	message = msg;
	window.plugins.statusBarNotification.notify("Aksi Cepat Tanggap", message);
}