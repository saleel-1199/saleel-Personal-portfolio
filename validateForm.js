function validateForm(){
    const name=document.getElementById("userName").value.trim();
    const mail=document.getElementById("userEmail").value.trim();
    const phone=document.getElementById("userPhone").value.trim();
    const subject=document.getElementById("messageSubject").value.trim();
    const message=document.getElementById("userMessage").value.trim();

    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const subjectRegex = /^.{3,50}$/;
  const messageRegex = /^.{5,}$/;

   if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters only, 2–30 characters).");
    return false;
  }

  if (!emailRegex.test(mail)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!subjectRegex.test(subject)) {
    alert("Subject must be between 3 and 50 characters.");
    return false;
  }

  if (!messageRegex.test(message)) {
    alert("Message must be at least 5 characters.");
    return false;
  }
  if(!phoneRegex.test(phone)){
    alert("Please enter a number between 0-9.");
    return false;
  }
  return true;
}
