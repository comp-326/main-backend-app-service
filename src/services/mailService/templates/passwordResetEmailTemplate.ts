import ejs from 'ejs';

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="padding: 0;margin: 0;box-sizing: 0;font-family: Poppins,Raleway,Arial, Helvetica, sans-serif;">
    <% if (data) { %>
		<h1>Reset your Account password</h1>
        <p>Please use the link below to reset your account password</p>
        <p>The link will expire after 24hours</p>
        <a style="padding: 10px 30px;background-color: #3d0991;color: #ffffff; text-decoration: none;border-radius: 5px;text-transform: capitalize;" href="<%= data.link %>" target="_blank" rel="noopener noreferrer">Reset account password</a>
      <% } %>
</body>
</html>
`;

export default function passwordResetEmailTemplate(props: {
	link: string;
	firstName: string;
	lastName: string;
}){
	return ejs.render(template,{data:props});
}


