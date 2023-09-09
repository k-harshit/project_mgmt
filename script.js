
document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const taskList = document.getElementById("task-list");

    sendButton.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message !== "") {
            // Create a new message element and add it to the chat
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);

            // Clear the message input
            messageInput.value = "";

            // Check if the message contains a task assignment (@username)
            const taskAssignmentMatch = message.match(/@(\w+)/);
            if (taskAssignmentMatch) {
                // Extract the assigned user without displaying it
                const assignedUser = taskAssignmentMatch[1];
                // Create a new task element and add it to the task list
                const taskElement = document.createElement("li");
                taskElement.textContent = `Task for ${assignedUser}: ${message.replace(taskAssignmentMatch[0], "")}`;
                taskList.appendChild(taskElement);
            }
        }
    });
});
