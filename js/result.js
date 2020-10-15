window.addEventListener('load', () => {
    // const fname = sessionStorage.getItem('NAME');
    // const lname = sessionStorage.getItem('LNAME');
    // const emailid = sessionStorage.getItem('EMAIL');
    // const pass = sessionStorage.getItem('PASS');

    // document.getElementById('result-fname').innerHTML = fname;
    // document.getElementById('result-lname').innerHTML = lname;
    // document.getElementById('result-email').innerHTML = emailid;
    // document.getElementById('result-pass').innerHTML = pass;

    const params = (new URL(document.location)).searchParams;
    const firstname = params.get('firstname');
    const lastname = params.get('lastname');
    const email = params.get('email');
    const password = params.get('password');

 document.getElementById('result-fname').innerHTML = firstname;
    document.getElementById('result-lname').innerHTML = lastname;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-pass').innerHTML = password;

});
