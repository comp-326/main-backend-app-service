import ejs from 'ejs';

const template =`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    style="
      padding: 0;
      margin: 0;
      box-sizing: 0;
      font-family: Poppins, Raleway, Arial, Helvetica, sans-serif;
    "
  >
    <% if (data) { %>
    <p>
      Hello <%= data.firstName %> <%= data.lastName %> and welcome to Ostrich
    </p>
    <p>We are happy to work with you at ostrich and feel at home</p>
    <p>Account has been created for you with the following details</p>
    <p>Email: <%= data.email %></p>
    <p>First name: <%= data.firstName %></p>
    <p>Last name: <%= data.lastName %></p>
    <p>Password: <%= data.password %></p>
    <p>Click on the link below to login to your account</p>
    <a
      style="
        padding: 10px 30px;
        background-color: #3d0991;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        text-transform: capitalize;
      "
      href="<%= data.link %>"
      target="_blank"
      rel="noopener noreferrer"
      >Login to your account</a
    >
    <p></p>
    <% } %>
  </body>
</html>
`;


export default function accountCreationEmailTemplate(props: {
	password: string;
	firstName: string;
	lastName: string;
	email: string;
}){
	return ejs.render(template,{data:props});
}
