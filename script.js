// Show settings message
function showSettings() {
    alert('Settings menu is under construction.');
}

// Lock chat input
function lockChat() {
    const input = document.getElementById('message-input');
    if (input) {
        input.disabled = true;
        alert('Chat has been locked.');
    } else {
        console.error('Message input field not found.');
    }
}

// Hide chat box
function hideChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
        chatBox.style.display = 'none';
        alert('Chat has been hidden. Refresh to show again.');
    } else {
        console.error('Chat box not found.');
    }
}

// Send message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');

    if (!messageInput || !messages) {
        console.error('Message input or messages container not found.');
        return;
    }

    const message = messageInput.value.trim();
    if (message) {
        // Add user message
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'self');
        newMessage.textContent = message;
        messages.appendChild(newMessage);
        messages.scrollTop = messages.scrollHeight;
        messageInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const responseMessage = document.createElement('div');
            responseMessage.classList.add('message', 'other');
            responseMessage.textContent = 'This is a response message.';
            messages.appendChild(responseMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    } else {
        alert('Message cannot be empty!');
    }
}
