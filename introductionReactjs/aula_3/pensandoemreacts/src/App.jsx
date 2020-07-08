import React from "react";

const listCustome = [
  {
    id: 1,
    name: 'matheus',
    skills: ['html']
  },
  {
    id: 2,
    name: 'matheus1',
    skills: ['html']

  },
  {
    id: 3,
    name: 'matheus3',
    skills: ['html']

  },
  {
    id: 4,
    name: 'matheus4',
    skills: ['html']

  },
  {
    id: 5,
    name: 'matheus5',
    skills: ['html']

  }
]

const App = () => {

  const renderCustomers = (customer,index) =>{
    return(
      <div  key={`customer-${customer.id}`}>
        <li >{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill,index) =>{  return(
    <div key={`skills-${index}`}>
      <li >{skill}</li>
    </div>
  )}
  
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
           {listCustome.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;