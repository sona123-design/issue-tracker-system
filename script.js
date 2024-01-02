function createIssue() {
    const issueTitle = document.getElementById('issueTitle').value;
    const issueDescription = document.getElementById('issueDescription').value;
    const priority = document.getElementById('priority').value;
    const assignedTo = document.getElementById('assignedTo').value;
    const fileUpload = document.getElementById('fileUpload').value;

    const issueList = document.getElementById('issueList');

    // Create a new issue element
    const issueElement = document.createElement('div');
    issueElement.classList.add('issue');

    // Populate issue details
    issueElement.innerHTML = `
        <h3>${issueTitle}</h3>
        <p><strong>Description:</strong> ${issueDescription}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Assigned To:</strong> ${assignedTo}</p>
        <p><strong>File:</strong> ${fileUpload}</p>
    `;

    // Append the issue to the list
    issueList.appendChild(issueElement);

    // Clear input fields
    document.getElementById('issueTitle').value = '';
    document.getElementById('issueDescription').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('assignedTo').value = '';
    document.getElementById('fileUpload').value = '';
}
