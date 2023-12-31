import React,{useEffect,useState} from 'react';

const CreateSchedule=()=> {

    const [weekStartDate, setWeekStartDate] = useState(null);
    const [monday, setMonday] = useState(null);
    const [tuesday, setTuesday] = useState(null);
    const [wednesday, setWednesday] = useState(null);
    const [thursday, setThursday] = useState(null);
    const [friday, setFriday] = useState(null);
    const [weekEndDate, setWeekEndDate] = useState(null);

    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectedButtons2, setSelectedButtons2] = useState([]);
    const [selectedButtons3, setSelectedButtons3] = useState([]);
    const [selectedButtons4, setSelectedButtons4] = useState([]);
    const [selectedButtons5, setSelectedButtons5] = useState([]);
    const [selectedButtons6, setSelectedButtons6] = useState([]);
    const [selectedButtons7, setSelectedButtons7] = useState([]);

    const [cancelIndex, setCancelIndex] = useState(1);

    //const [emp,setEmp] = useState([{name:'',hours:0}]);

    const cancelColors = {
    0: 'yellow',
    1: 'blue',
    2: 'green',
    3: 'black',
    4: 'red',
    5: 'purple',
    6: 'orange',
    7: 'brown',
    8: 'pink'
  };

  const employees=[
    {name:'Himani',hours:20},
    {name:'Vihar',hours:30},
    {name:'Myra',hours:15}
  ];

  const handleButtonClick = (buttonId)=>{
    const button = document.getElementById(buttonId);

      if (selectedButtons.length === 0 || selectedButtons.length === 2) {
        // Start a new selection

        setSelectedButtons([button]);
        
        //const cancelColor = cancelColors[cancelIndex] || 'gray'; // Default to gray if color is not defined
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        console.log("color: ",cancelColor)

        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons1 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          //const cancelColor = cancelColors[cancelIndex] || 'gray'; // Default to gray if color is not defined
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons((selectedButtons) => [...selectedButtons, button]);
      }
  }
  const handleButtonClick2 = (buttonId)=>{
    const button = document.getElementById(buttonId);
  
      if (selectedButtons2.length === 0 || selectedButtons2.length === 2) {
        // Start a new selection

        setSelectedButtons2([button]);
        
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons2 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons2[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons2((selectedButtons2) => [...selectedButtons2, button]);
      }
  }
  const handleButtonClick3 = (buttonId)=>{
    const button = document.getElementById(buttonId);
    
      if (selectedButtons3.length === 0 || selectedButtons3.length === 2) {
        // Start a new selection
        setSelectedButtons3([button]);
        
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons3 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons3[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons3((selectedButtons3) => [...selectedButtons3, button]);

      }
  }
  const handleButtonClick4 = (buttonId)=>{
    const button = document.getElementById(buttonId);
    
      if (selectedButtons4.length === 0 || selectedButtons4.length === 2) {
        // Start a new selection

        setSelectedButtons4([button]);
        
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons4 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons4[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons4((selectedButtons4) => [...selectedButtons4, button]);

      }
  }
  const handleButtonClick5 = (buttonId)=>{
    const button = document.getElementById(buttonId);

      if (selectedButtons5.length === 0 || selectedButtons5.length === 2) {
        // Start a new selection

        setSelectedButtons5([button]);
        
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons5 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons5[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons5((selectedButtons5) => [...selectedButtons5, button]);
      }
  }
  const handleButtonClick6 = (buttonId)=>{
    const button = document.getElementById(buttonId);
  

      if (selectedButtons6.length === 0 || selectedButtons6.length === 2) {
        // Start a new selection

        setSelectedButtons6([button]);
        
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons6 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons6[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons6((selectedButtons6) => [...selectedButtons6, button]);

      }
  }
  const handleButtonClick7 = (buttonId)=>{
    const button = document.getElementById(buttonId);

      if (selectedButtons7.length === 0 || selectedButtons7.length === 2) {
        // Start a new selection

        setSelectedButtons7([button]);
        
        const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
        button.style.backgroundColor = cancelColor;
    
        button.classList.add('highlight');

      } else 
      {
        // Continue the existing selection
        const buttons = document.querySelectorAll('#buttons7 button');
        const startIndex = Array.from(buttons).indexOf(selectedButtons7[0]);
        const endIndex = Array.from(buttons).indexOf(button);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          const cancelColor = cancelColors[cancelIndex % Object.keys(cancelColors).length] || 'gray';
          buttons[i].style.backgroundColor = cancelColor;
        }

        setSelectedButtons7((selectedButtons7) => [...selectedButtons7, button]);

      }
  }

  //7 USEEFFECTS FOR RESPETIVE SELECTED BUTTONS 

  useEffect(()=>{
    if (selectedButtons.length === 2) {
      // This will only run when selectedButtons is updated to have 2 buttons
      createCancelButton(selectedButtons);
      setSelectedButtons([]);
    }
// eslint-disable-next-line
  },[selectedButtons])

  useEffect(()=>{
    if (selectedButtons2.length === 2) {
      createCancelButton2(selectedButtons2);
      setSelectedButtons2([]);
    }
// eslint-disable-next-line
  },[selectedButtons2])

  useEffect(()=>{
    if (selectedButtons3.length === 2) {
      createCancelButton3(selectedButtons3);
      setSelectedButtons3([]);
    }
// eslint-disable-next-line
  },[selectedButtons3])

  useEffect(()=>{
    if (selectedButtons4.length === 2) {
      createCancelButton4(selectedButtons4);
      setSelectedButtons4([]);
    }
// eslint-disable-next-line
  },[selectedButtons4])

  useEffect(()=>{
    if (selectedButtons5.length === 2) {
      createCancelButton5(selectedButtons5);
      setSelectedButtons5([]);
    }
// eslint-disable-next-line
  },[selectedButtons5])

  useEffect(()=>{
    if (selectedButtons6.length === 2) {
      createCancelButton6(selectedButtons6);
      setSelectedButtons6([]);
    }
// eslint-disable-next-line
  },[selectedButtons6])

  useEffect(()=>{
    if (selectedButtons7.length === 2) {
      createCancelButton7(selectedButtons7);
      setSelectedButtons7([]);
    }
// eslint-disable-next-line
  },[selectedButtons7])
  

  const createCancelButton = async (selectedButtons)=> {

    const cancelButtonContainer = document.getElementById('cancelButtonsContainer');
    
    const empContainer = document.getElementById('empContainer');
  
    console.log("Index before increment 1    : ",cancelIndex);
    const currentIndex = cancelIndex;
    console.log("Index before increment 1: ",cancelIndex);


    //For the cancelIndex problem

    const cancelButton = document.createElement('div');
    
    cancelButton.textContent = `Unselect:  ${selectedButtons[0].textContent} to ${selectedButtons[1].textContent}`;
    cancelButton.classList.add('cancelButton');
    cancelButton.setAttribute('data-index', currentIndex);


    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons[0].textContent} to ${selectedButtons[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);

    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    console.log("cancel color 1: ",cancelColor);
    cancelButton.style.backgroundColor = cancelColor;

    cancelButtonContainer.appendChild(cancelButton);
    empContainer.appendChild(empAddButton);

    cancelButton.addEventListener('click', () => {
      try {
        cancelSelection(currentIndex, selectedButtons);
        console.log("Cancel index in event listener: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
    console.log("Index after increment 1: ",cancelIndex);
  }
  
  const createCancelButton2 = async (selectedButtons2)=> {

    const cancelButtonContainer2 = document.getElementById('cancelButtonsContainer2');
    const empContainer2 = document.getElementById('empContainer2');
  
    const currentIndex = cancelIndex;
    console.log("Index after increment 2: ",cancelIndex);

    //For the cancelIndex problem

    const cancelButton2 = document.createElement('div');
    
    cancelButton2.textContent = `Unselect:  ${selectedButtons2[0].textContent} to ${selectedButtons2[1].textContent}`;
    cancelButton2.classList.add('cancelButton');
    cancelButton2.setAttribute('data-index', currentIndex);

    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons2[0].textContent} to ${selectedButtons2[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);


    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    console.log("cancel color: ",cancelColor);
    cancelButton2.style.backgroundColor = cancelColor;

    cancelButtonContainer2.appendChild(cancelButton2);
    empContainer2.appendChild(empAddButton);

    cancelButton2.addEventListener('click', () => {
      try {
        cancelSelection2(currentIndex, selectedButtons2);
        console.log("Cancel index in event listener: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
    console.log("Index after increment 2: ",cancelIndex);

  }
  const createCancelButton3 = async (selectedButtons3)=> {

    const cancelButtonContainer3 = document.getElementById('cancelButtonsContainer3');
    const empContainer3 = document.getElementById('empContainer3');
  
    const currentIndex = cancelIndex;
    //For the cancelIndex problem

    const cancelButton3 = document.createElement('div');
    
    cancelButton3.textContent = `Unclear:  ${selectedButtons3[0].textContent} to ${selectedButtons3[1].textContent}`;
    cancelButton3.classList.add('cancelButton');
    cancelButton3.setAttribute('data-index', currentIndex);


    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons3[0].textContent} to ${selectedButtons3[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);


    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    cancelButton3.style.backgroundColor = cancelColor;

    cancelButtonContainer3.appendChild(cancelButton3);
    empContainer3.appendChild(empAddButton);

    cancelButton3.addEventListener('click', () => {
      try {
        cancelSelection3(currentIndex, selectedButtons3);
        console.log("Cancel index in function: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
  }
  const createCancelButton4 = async (selectedButtons4)=> {

    const cancelButtonContainer4 = document.getElementById('cancelButtonsContainer4');
    const empContainer4 = document.getElementById('empContainer4');
  
    const currentIndex = cancelIndex;
    //For the cancelIndex problem

    const cancelButton4 = document.createElement('div');
    
    cancelButton4.textContent = `Unclear:  ${selectedButtons4[0].textContent} to ${selectedButtons4[1].textContent}`;
    cancelButton4.classList.add('cancelButton');
    cancelButton4.setAttribute('data-index', currentIndex);


    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons4[0].textContent} to ${selectedButtons4[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);


    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    cancelButton4.style.backgroundColor = cancelColor;

    cancelButton4.addEventListener('click', () => {
      try {
        cancelSelection4(currentIndex, selectedButtons4);
        console.log("Cancel index in function: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    cancelButtonContainer4.appendChild(cancelButton4);
    empContainer4.appendChild(empAddButton);
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
  }
  const createCancelButton5 = async (selectedButtons5)=> {

    const cancelButtonContainer5 = document.getElementById('cancelButtonsContainer5');
    const empContainer5 = document.getElementById('empContainer5');
  
    const currentIndex = cancelIndex;
    //For the cancelIndex problem

    const cancelButton5 = document.createElement('div');
    
    cancelButton5.textContent = `Unclear:  ${selectedButtons5[0].textContent} to ${selectedButtons5[1].textContent}`;
    cancelButton5.classList.add('cancelButton');
    cancelButton5.setAttribute('data-index', currentIndex);


    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons5[0].textContent} to ${selectedButtons5[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);


    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    cancelButton5.style.backgroundColor = cancelColor;

    cancelButton5.addEventListener('click', () => {
      try {
        cancelSelection5(currentIndex, selectedButtons5);
        console.log("Cancel index in function: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    cancelButtonContainer5.appendChild(cancelButton5);
    empContainer5.appendChild(empAddButton);
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
  }
  const createCancelButton6 = async (selectedButtons6)=> {

    const cancelButtonContainer6 = document.getElementById('cancelButtonsContainer6');
    const empContainer6 = document.getElementById('empContainer6');
  
    const currentIndex = cancelIndex;
    //For the cancelIndex problem

    const cancelButton6 = document.createElement('div');
    
    cancelButton6.textContent = `Unclear:  ${selectedButtons6[0].textContent} to ${selectedButtons6[1].textContent}`;
    cancelButton6.classList.add('cancelButton');
    cancelButton6.setAttribute('data-index', currentIndex);


    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons6[0].textContent} to ${selectedButtons6[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);


    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    cancelButton6.style.backgroundColor = cancelColor;

    cancelButton6.addEventListener('click', () => {
      try {
        cancelSelection6(currentIndex, selectedButtons6);
        console.log("Cancel index in function: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    cancelButtonContainer6.appendChild(cancelButton6);
    empContainer6.appendChild(empAddButton);
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
  }
  const createCancelButton7 = async (selectedButtons7)=> {

    const cancelButtonContainer7 = document.getElementById('cancelButtonsContainer7');
    const empContainer7 = document.getElementById('empContainer7');
  
    const currentIndex = cancelIndex;
    //For the cancelIndex problem

    const cancelButton7 = document.createElement('div');
    
    cancelButton7.textContent = `Unclear:  ${selectedButtons7[0].textContent} to ${selectedButtons7[1].textContent}`;
    cancelButton7.classList.add('cancelButton');
    cancelButton7.setAttribute('data-index', currentIndex);


    const empAddButton = document.createElement('button');
    empAddButton.setAttribute('data-bs-toggle', 'modal');
    empAddButton.setAttribute('data-bs-target', '#exampleModal');

    
    empAddButton.textContent = `Assign employee for TIME:  ${selectedButtons7[0].textContent} to ${selectedButtons7[1].textContent}`;
    empAddButton.classList.add('empAdd');
    empAddButton.setAttribute('data-index', currentIndex);


    const cancelColor = cancelColors[currentIndex] || 'gray'; // Default to gray if color is not defined
    cancelButton7.style.backgroundColor = cancelColor;

    cancelButton7.addEventListener('click', () => {
      try {
        cancelSelection7(currentIndex, selectedButtons7);
        console.log("Cancel index in function: ", cancelIndex);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    cancelButtonContainer7.appendChild(cancelButton7);
    empContainer7.appendChild(empAddButton);
    
    // Increment cancel index for the next cancel button
    setCancelIndex((prevIndex) => prevIndex + 1);
  }
  
  const cancelSelection=(index,selectedButtons)=> {
    console.log("INDEXXXXXX IN SELECTION 1: ",index);

        const buttons = document.querySelectorAll('#buttons1 button');
        console.log(buttons);
        const startIndex = Array.from(buttons).indexOf(selectedButtons[0]);
        const endIndex = Array.from(buttons).indexOf(selectedButtons[1]);

        for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
          //buttons[i].classList.remove('highlight');
          buttons[i].style.backgroundColor = 'white';
        }

      // Hide the corresponding cancel button

      //const cancelButton = document.querySelector(`.cancelButton:nth-child(${index})`);
      const cancelButton = document.querySelector(`.cancelButton[data-index="${index}"]`);
      //const empDropdown = document.querySelector(`.empAdd:nth-child(${index})`);
      const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);

      if (cancelButton) {
    cancelButton.style.display = 'none';
  } else {
    console.error(`Cancel button with index ${index} not found.`);
  }

  if (empDropdown) {
    empDropdown.style.display = 'none';
  } else {
    console.error(`Dropdown with index ${index} not found.`);
  }
}

const cancelSelection2=(index,selectedButtons2)=> {
  const buttons = document.querySelectorAll('#buttons2 button');
  console.log(buttons);
  const startIndex = Array.from(buttons).indexOf(selectedButtons2[0]);
  const endIndex = Array.from(buttons).indexOf(selectedButtons2[1]);

  for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
    //buttons[i].classList.remove('highlight');
    buttons[i].style.backgroundColor = 'white';
  }

// Hide the corresponding cancel button

//const cancelButton2 = document.querySelector(`.cancelButton:nth-child(${index})`);
const cancelButton2 = document.querySelector(`.cancelButton[data-index="${index}"]`);

const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);

if (cancelButton2) {
cancelButton2.style.display = 'none';
} else {
console.error(`Cancel button with index ${index} not found.`);
}

if (empDropdown) {
empDropdown.style.display = 'none';
} else {
console.error(`Dropdown with index ${index} not found.`);
}
}
const cancelSelection3=(index,selectedButtons3)=> {
  const buttons = document.querySelectorAll('#buttons3 button');
  const startIndex = Array.from(buttons).indexOf(selectedButtons3[0]);
  const endIndex = Array.from(buttons).indexOf(selectedButtons3[1]);

  for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
    buttons[i].style.backgroundColor = 'white';
  }

// Hide the corresponding cancel button

const cancelButton3 = document.querySelector(`.cancelButton[data-index="${index}"]`);

const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);

if (cancelButton3) {
cancelButton3.style.display = 'none';
} else {
console.error(`Cancel button with index ${index} not found.`);
}

if (empDropdown) {
empDropdown.style.display = 'none';
} else {
console.error(`Dropdown with index ${index} not found.`);
}
}
const cancelSelection4=(index,selectedButtons4)=> {
  const buttons = document.querySelectorAll('#buttons4 button');
  const startIndex = Array.from(buttons).indexOf(selectedButtons4[0]);
  const endIndex = Array.from(buttons).indexOf(selectedButtons4[1]);

  for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
    buttons[i].style.backgroundColor = 'white';
  }

// Hide the corresponding cancel button

const cancelButton4 = document.querySelector(`.cancelButton[data-index="${index}"]`);

const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);

if (cancelButton4) {
cancelButton4.style.display = 'none';
} else {
console.error(`Cancel button with index ${index} not found.`);
}

if (empDropdown) {
empDropdown.style.display = 'none';
} else {
console.error(`Dropdown with index ${index} not found.`);
}
}
const cancelSelection5=(index,selectedButtons5)=> {
  const buttons = document.querySelectorAll('#buttons5 button');
  const startIndex = Array.from(buttons).indexOf(selectedButtons5[0]);
  const endIndex = Array.from(buttons).indexOf(selectedButtons5[1]);

  for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
    buttons[i].style.backgroundColor = 'white';
  }

// Hide the corresponding cancel button

const cancelButton5 = document.querySelector(`.cancelButton[data-index="${index}"]`);

const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);

if (cancelButton5) {
cancelButton5.style.display = 'none';
} else {
console.error(`Cancel button with index ${index} not found.`);
}

if (empDropdown) {
empDropdown.style.display = 'none';
} else {
console.error(`Dropdown with index ${index} not found.`);
}
}
const cancelSelection6=(index,selectedButtons6)=> {
  const buttons = document.querySelectorAll('#buttons6 button');
  const startIndex = Array.from(buttons).indexOf(selectedButtons6[0]);
  const endIndex = Array.from(buttons).indexOf(selectedButtons6[1]);

  for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
    buttons[i].style.backgroundColor = 'white';
  }

// Hide the corresponding cancel button

const cancelButton6 = document.querySelector(`.cancelButton[data-index="${index}"]`);

const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);

if (cancelButton6) {
cancelButton6.style.display = 'none';
} else {
console.error(`Cancel button with index ${index} not found.`);
}

if (empDropdown) {
empDropdown.style.display = 'none';
} else {
console.error(`Dropdown with index ${index} not found.`);
}
}
const cancelSelection7=(index,selectedButtons7)=> {
  const buttons = document.querySelectorAll('#buttons7 button');
  const startIndex = Array.from(buttons).indexOf(selectedButtons7[0]);
  const endIndex = Array.from(buttons).indexOf(selectedButtons7[1]);

  for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
    buttons[i].style.backgroundColor = 'white';
  }

// Hide the corresponding cancel button

const cancelButton7 = document.querySelector(`.cancelButton[data-index="${index}"]`);

const empDropdown = document.querySelector(`.empAdd[data-index="${index}"]`);
if (cancelButton7) {
cancelButton7.style.display = 'none';
} else {
console.error(`Cancel button with index ${index} not found.`);
}

if (empDropdown) {
empDropdown.style.display = 'none';
} else {
console.error(`Dropdown with index ${index} not found.`);
}
}

const handleEmps =()=>{
  
  // const selectedValue = e.target.value;

  // const selectedEmpDetails = employees.find(emp=>emp.name === selectedValue);
  // setEmp(selectedEmpDetails || {name:'',hours:0});
}

  useEffect(() => {
    // Function to get the start and end dates of the current week
    const getWeekDates = () => {
      const today = new Date();
      const startOfWeek = new Date(today);
      const mon = new Date(today);
      const tues = new Date(today);
      const wed = new Date(today);
      const thu = new Date(today);
      const fri = new Date(today);

      startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the current week (Sunday)
      mon.setDate(today.getDate() - today.getDay() + 1);
      tues.setDate(today.getDate() - today.getDay() + 2);
      wed.setDate(today.getDate() - today.getDay() + 3);
      thu.setDate(today.getDate() - today.getDay() + 4);
      fri.setDate(today.getDate() - today.getDay() + 5);

      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() - today.getDay() + 6); // End of the current week (Saturday)

      setWeekStartDate(startOfWeek.toDateString()); //converted in string
      setWeekEndDate(endOfWeek.toDateString());
      setMonday(mon.toDateString())
      setTuesday(tues.toDateString())
      setWednesday(wed.toDateString())
      setThursday(thu.toDateString())
      setFriday(fri.toDateString())
    };

    // Call the function when the component mounts
    getWeekDates();
  }, []);

  // useEffect(()=>{
  //   if(emp.name !== undefined){
  //     const empContainer = document.getElementById('empContainer');
  //     const empName = document.createElement('div');
  //     empName.textContent = `Assigned Employee: ${emp.name}`;
  //     empName.classList.add('empAdd');
  //     empContainer.appendChild(empName);
  //   }
  // },[emp])

  const onReset = (elementid)=>{
    const buttons = document.querySelectorAll(`#${elementid} button`);
    const cancelButton = document.querySelectorAll(`#${elementid} + div`);
    const empDropdown = document.querySelectorAll(`#${elementid} + div + div`);

    if (buttons.length > 0) {
      buttons.forEach(button => {
        button.style.backgroundColor = 'white';
      });
    }
    else{
      console.log("No buttons");
    }
    if (cancelButton.length > 0) {
      cancelButton.forEach((button) => {
        button.style.display = 'none';
      });
    } else {
      console.log("No cancel buttons found");
    }
    if(empDropdown.length > 0){
      empDropdown.forEach(button=>{
        button.style.display = 'none';
      })
    }else{
      console.log("no empdropdown found");
    }
  }

  return (
    <div style={{marginTop:"75px"}}>
      <h2 style={{marginLeft:"20px",marginBottom:"20px"}}><b><u>Schedule from {weekStartDate} to {weekEndDate}</u></b></h2>

  <div id="buttons1" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{weekStartDate}</p>
  <button id="btn1" onClick={()=>{handleButtonClick('btn1')}}>10 AM</button>
  <button id="btn2" onClick={()=>{handleButtonClick('btn2')}}>11 AM</button>
  <button id="btn3" onClick={()=>{handleButtonClick('btn3')}}>12 PM</button>
  <button id="btn4" onClick={()=>{handleButtonClick('btn4')}}>1 PM</button>
  <button id="btn5" onClick={()=>{handleButtonClick('btn5')}}>2 PM</button>
  <button id="btn6" onClick={()=>{handleButtonClick('btn6')}}>3 PM</button>
  <button id="btn7" onClick={()=>{handleButtonClick('btn7')}}>4 PM</button>
  <button id="btn8" onClick={()=>{handleButtonClick('btn8')}}>5 PM</button>
  <button id="btn9" onClick={()=>{handleButtonClick('btn9')}}>6 PM</button>
  <button id="btn10" onClick={()=>{handleButtonClick('btn10')}}>7 PM</button>
  <button id="btn11" onClick={()=>{handleButtonClick('btn11')}}>8 PM</button>
  <button id="btn12" onClick={()=>{handleButtonClick('btn12')}}>9 PM</button>
  <button id="btn13" onClick={()=>{handleButtonClick('btn13')}}>10 PM</button>
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons1')}}>Reset all</p>
  </div> 

  <div id="cancelButtonsContainer" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer" style={{marginLeft:"175px"}}></div>

  <div id="buttons2" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{monday}</p>
  <button id="btn14" onClick={()=>{handleButtonClick2('btn14')}}>10 AM</button>
  <button id="btn15" onClick={()=>{handleButtonClick2('btn15')}}>11 AM</button>
  <button id="btn16" onClick={()=>{handleButtonClick2('btn16')}}>12 PM</button>
  <button id="btn17" onClick={()=>{handleButtonClick2('btn17')}}>1 PM</button>
  <button id="btn18" onClick={()=>{handleButtonClick2('btn18')}}>2 PM</button>
  <button id="btn19" onClick={()=>{handleButtonClick2('btn19')}}>3 PM</button>
  <button id="btn20" onClick={()=>{handleButtonClick2('btn20')}}>4 PM</button>
  <button id="btn21" onClick={()=>{handleButtonClick2('btn21')}}>5 PM</button>
  <button id="btn22" onClick={()=>{handleButtonClick2('btn22')}}>6 PM</button>
  <button id="btn23" onClick={()=>{handleButtonClick2('btn23')}}>7 PM</button>
  <button id="btn24" onClick={()=>{handleButtonClick2('btn24')}}>8 PM</button>
  <button id="btn25" onClick={()=>{handleButtonClick2('btn25')}}>9 PM</button>
  <button id="btn26" onClick={()=>{handleButtonClick2('btn26')}}>10 PM</button>
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons2')}}>Reset all</p>

  </div>

  <div id="cancelButtonsContainer2" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer2" style={{marginLeft:"175px"}}></div>

  <div id="buttons3" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{tuesday}</p>
  <button id="btn27" onClick={()=>{handleButtonClick3('btn27')}}>10 AM</button>
  <button id="btn28" onClick={()=>{handleButtonClick3('btn28')}}>11 AM</button>
  <button id="btn29" onClick={()=>{handleButtonClick3('btn29')}}>12 PM</button>
  <button id="btn30" onClick={()=>{handleButtonClick3('btn30')}}>1 PM</button>
  <button id="btn31" onClick={()=>{handleButtonClick3('btn31')}}>2 PM</button>
  <button id="btn32" onClick={()=>{handleButtonClick3('btn32')}}>3 PM</button>
  <button id="btn33" onClick={()=>{handleButtonClick3('btn33')}}>4 PM</button>
  <button id="btn34" onClick={()=>{handleButtonClick3('btn34')}}>5 PM</button>
  <button id="btn35" onClick={()=>{handleButtonClick3('btn35')}}>6 PM</button>
  <button id="btn36" onClick={()=>{handleButtonClick3('btn36')}}>7 PM</button>
  <button id="btn37" onClick={()=>{handleButtonClick3('btn37')}}>8 PM</button>
  <button id="btn38" onClick={()=>{handleButtonClick3('btn38')}}>9 PM</button>
  <button id="btn39" onClick={()=>{handleButtonClick3('btn39')}}>10 PM</button>
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons3')}}>Reset all</p>
  </div>

  <div id="cancelButtonsContainer3" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer3" style={{marginLeft:"175px"}}></div>

  <div id="buttons4" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{wednesday}</p>
  <button id="btn40" onClick={()=>{handleButtonClick4('btn40')}}>10 AM</button>
  <button id="btn41" onClick={()=>{handleButtonClick4('btn41')}}>11 AM</button>
  <button id="btn42" onClick={()=>{handleButtonClick4('btn42')}}>12 PM</button>
  <button id="btn43" onClick={()=>{handleButtonClick4('btn43')}}>1 PM</button>
  <button id="btn44" onClick={()=>{handleButtonClick4('btn44')}}>2 PM</button>
  <button id="btn45" onClick={()=>{handleButtonClick4('btn45')}}>3 PM</button>
  <button id="btn46" onClick={()=>{handleButtonClick4('btn46')}}>4 PM</button>
  <button id="btn47" onClick={()=>{handleButtonClick4('btn47')}}>5 PM</button>
  <button id="btn48" onClick={()=>{handleButtonClick4('btn48')}}>6 PM</button>
  <button id="btn49" onClick={()=>{handleButtonClick4('btn49')}}>7 PM</button>
  <button id="btn50" onClick={()=>{handleButtonClick4('btn50')}}>8 PM</button>
  <button id="btn51" onClick={()=>{handleButtonClick4('btn51')}}>9 PM</button>
  <button id="btn52" onClick={()=>{handleButtonClick4('btn52')}}>10 PM</button>
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons4')}}>Reset all</p>
  </div>

  <div id="cancelButtonsContainer4" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer4" style={{marginLeft:"175px"}}></div>

  <div id="buttons5" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{thursday}</p>
  <button id="btn53" onClick={()=>{handleButtonClick5('btn53')}}>10 AM</button>
  <button id="btn54" onClick={()=>{handleButtonClick5('btn54')}}>11 AM</button>
  <button id="btn55" onClick={()=>{handleButtonClick5('btn55')}}>12 PM</button>
  <button id="btn56" onClick={()=>{handleButtonClick5('btn56')}}>1 PM</button>
  <button id="btn57" onClick={()=>{handleButtonClick5('btn57')}}>2 PM</button>
  <button id="btn58" onClick={()=>{handleButtonClick5('btn58')}}>3 PM</button>
  <button id="btn59" onClick={()=>{handleButtonClick5('btn59')}}>4 PM</button>
  <button id="btn60" onClick={()=>{handleButtonClick5('btn60')}}>5 PM</button>
  <button id="btn61" onClick={()=>{handleButtonClick5('btn61')}}>6 PM</button>
  <button id="btn62" onClick={()=>{handleButtonClick5('btn62')}}>7 PM</button>
  <button id="btn63" onClick={()=>{handleButtonClick5('btn63')}}>8 PM</button>
  <button id="btn64" onClick={()=>{handleButtonClick5('btn64')}}>9 PM</button>
  <button id="btn65" onClick={()=>{handleButtonClick5('btn65')}}>10 PM</button>
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons5')}}>Reset all</p>
  </div>
  <div id="cancelButtonsContainer5" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer5" style={{marginLeft:"175px"}}></div>

  <div id="buttons6" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{friday}</p>
  <button id="btn66" onClick={()=>{handleButtonClick6('btn66')}}>10 AM</button>
  <button id="btn67" onClick={()=>{handleButtonClick6('btn67')}}>11 AM</button>
  <button id="btn68" onClick={()=>{handleButtonClick6('btn68')}}>12 PM</button>
  <button id="btn69" onClick={()=>{handleButtonClick6('btn69')}}>1 PM</button>
  <button id="btn70" onClick={()=>{handleButtonClick6('btn70')}}>2 PM</button>
  <button id="btn71" onClick={()=>{handleButtonClick6('btn71')}}>3 PM</button>
  <button id="btn72" onClick={()=>{handleButtonClick6('btn72')}}>4 PM</button>
  <button id="btn73" onClick={()=>{handleButtonClick6('btn73')}}>5 PM</button>
  <button id="btn74" onClick={()=>{handleButtonClick6('btn74')}}>6 PM</button>
  <button id="btn75" onClick={()=>{handleButtonClick6('btn75')}}>7 PM</button>
  <button id="btn76" onClick={()=>{handleButtonClick6('btn76')}}>8 PM</button>
  <button id="btn77" onClick={()=>{handleButtonClick6('btn77')}}>9 PM</button>
  <button id="btn78" onClick={()=>{handleButtonClick6('btn78')}}>10 PM</button>
  {/* <p style={{marginLeft:"60px",backgroundColor:"#E54B60",color:"white"}} onClick={()=>{onReset('buttons6')}}>Reset all</p> */}
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons6')}}>Reset all</p>

  </div>

  <div id="cancelButtonsContainer6" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer6" style={{marginLeft:"175px"}}></div>

  <div id="buttons7" style={{display:'flex',alignItems:"center"}}>
  <p style={{marginRight:"20px",width:"142px",backgroundColor:"#F9A5A5",marginLeft:"7px",textAlign:"center",padding:"10px"}}>{weekEndDate}</p>
  <button id="btn79" onClick={()=>{handleButtonClick7('btn79')}}>10 AM</button>
  <button id="btn80" onClick={()=>{handleButtonClick7('btn80')}}>11 AM</button>
  <button id="btn81" onClick={()=>{handleButtonClick7('btn81')}}>12 PM</button>
  <button id="btn82" onClick={()=>{handleButtonClick7('btn82')}}>1 PM</button>
  <button id="btn83" onClick={()=>{handleButtonClick7('btn83')}}>2 PM</button>
  <button id="btn84" onClick={()=>{handleButtonClick7('btn84')}}>3 PM</button>
  <button id="btn85" onClick={()=>{handleButtonClick7('btn85')}}>4 PM</button>
  <button id="btn86" onClick={()=>{handleButtonClick7('btn86')}}>5 PM</button>
  <button id="btn87" onClick={()=>{handleButtonClick7('btn87')}}>6 PM</button>
  <button id="btn88" onClick={()=>{handleButtonClick7('btn88')}}>7 PM</button>
  <button id="btn89" onClick={()=>{handleButtonClick7('btn89')}}>8 PM</button>
  <button id="btn90" onClick={()=>{handleButtonClick7('btn90')}}>9 PM</button>
  <button id="btn91" onClick={()=>{handleButtonClick7('btn91')}}>10 PM</button>
  {/* <p style={{marginLeft:"60px",backgroundColor:"#E54B60",color:"white"}} onClick={()=>{onReset('buttons7')}}><img src={require('../img/reset.png')} alt=''></img></p> */}
  <p style={{marginRight:"20px",width:"100px",backgroundColor:"#F9A5A5",marginLeft:"50px",textAlign:"center",padding:"10px", cursor:"pointer" }} onClick={()=>{onReset('buttons7')}}>Reset all</p>
  </div>

  <div id="cancelButtonsContainer7" style={{display:"flex",flexWrap:"nowrap",marginLeft:"175px"}}>
  </div>
  <div id="empContainer7" style={{marginLeft:"175px"}}></div>
  
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        {/* eslint-disable */}
        <button type="button" id="somebutton" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{display:"flex", flexWrap:"nowrap"}}>
        {employees.map(emp=>(
      <button type="button" className="btn btn-secondary">{emp.name} - {emp.hours} hours</button>
        ))}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleEmps}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  {/*
  <div id="dropdownContainer" style={{marginTop: "20px"}}>
    <select name="dropdown" id="dropDown" onChange={handleEmps}>
    <option value="">Select an employee</option>
    {employees.map(emp=>(
      <option key={emp.name} value={emp.name}>
        {emp.name} - {emp.hours} hours
      </option>

    ))}
    </select>
  </div>
    */}
    </div>
  )
}

export default CreateSchedule
