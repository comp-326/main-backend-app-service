import ejs from 'ejs';

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="padding: 40px;margin: 0;box-sizing: 0;font-family: Poppins,Raleway,Arial, Helvetica, sans-serif;">
    <% if (data) { %>
        <h2> Hello <%= data.firstName %> <%= data.lastName %> and welcome to ostrich </h2>
        <p>Thank you for creating an account with us. </p>
        <p>To start using your account please click the link below to activate your account</p>
        <p>The link will expire after 24hours</p>
        <a style="padding: 10px 30px;background-color: #3d0991;color: #ffffff; text-decoration: none;border-radius: 5px;text-transform: capitalize;" href="<%= data.link %>" target="_blank" rel="noopener noreferrer">activate Account</a>
      <% } %>
</body>
</html>`;

export default function accountActivationEmailTemplate (props:{firstName:string,lastName:string,link:string}){
	const compiled  = ejs.render(template,{data:props},{beautify:true});

	return compiled;
}
