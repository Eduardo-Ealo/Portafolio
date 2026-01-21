function sendToWhatsApp(event) {
    event.preventDefault(); // evita el envío normal del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "+573006463013"; // ✅ Reemplaza con tu número real (sin espacios, con código país)
    
    const whatsappMessage = `Hola, soy *${name}* (Email: ${email})Mensaje:${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURI(whatsappMessage)}`;

    window.open(url, "_blank");
}

