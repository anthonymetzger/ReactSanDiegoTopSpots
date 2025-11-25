# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Anthony's Notes:

This project was a rather large jump from the last one. With the introduciton of components and bootstrap being a significant jump for me. For this reason, I will be heavily noting every single thing that I did not understand and try to best put it into words. Including the flow of data and how components interact with each other. The usage of components were absolutely the most difficult part of this for me. I found myself resorting to utilizing the internet, and even for the small things I couldn't seem to put the blocks together. However, by writing this out I am attempting to absorb all the information that I have put down. It would be useless of me to do a project and not really learn anything from it. So here is my attempt to describe the flow of data...

So, everything (naturally) starts in App.jsx. App.jsx is the 'main' part of this project. It serves as a final resting place for all the different components. It is where all the data is centralized and displayed to the user. All of the other components are there to prevent clutter and encourage organization. Components could be compared to 'functions' in js, but on a larger and more modular scale. If I wanted to, I could insert a separate component no even related to the table. I could (impractically) make a 'TitleDescription' component and instead of hardcoding a title and description, I could just return Title and Description in the main portion of 'TitleDescription' file. When I am ready to use that component, I would need to first: import it by using: import './TitleDescription.jsx'. Now that I have it imported, I would be able to use <TitleDescription> as a component. I am having a hard time trying to figure out how future me would word this, but I will try to really write it out step by step so that I can achieve my goal.

Lets start from the beginning. The skeleton of this project was provided to me and I was to write all the code in between. I am going to make an assumption that on a sort of primitive level, this project was made with this workflow in mind:

Step 1: This is what I want (A table of SD Top spots)
Step 2: I am going to need a components to <MakeTheTable> and I am going to need a component to <GatherItemsToPutInTable>
Step 3: Do it

Not too many steps, but the steps themselves are long. Keep in mind, this is an extremely bare-bones way to describe the process of creating this type of app. I have a very solid grasp on states but it seems that components are beyond my reach of understanding...

Lets begin from the top, assuming that I already have the idea above written out and all the files made, I think that would be the easiest way to describe it. 

<step 1>Inside of the App.jsx, I have a 'TopSpots' JSON url that I have to take from. Axios is weird... I don't like it but perhaps I'll have to make good relations with it to be able to achieve the amount of success I am striving for. Anyways... After getting the data from the url by utilizing Axios and setting the state of topSpots (kind of variable) to whatever the URL gives us. 

<step 2>Data is passed from App.jsx to TopSpots as a prop (property). The exact moment this happens is on line 24. <TopSpots is (called) and 'spots' is the name of the properties it is going to recieve>. Inside of the spots prop (parameter), I am sending topspots to be used. Essentially, instead of calling a function, I am sending sending the data inside of the state topSpots to TopSpots.jsx as a JSON string through the means of a component that contains props, which can in turn be used as an object. The component is <TopSpots> and the prop is whatever is inside of 'spots'.

<step 3>We are now inside of the file TopSpots.jsx. Here, the objects are broken down by recieving the prop 'spots' from step 2. If we can remember what the prop inside of spots is, it contains all of the objects that were in the JSON string. This in turn is used as a regular object for once.

<step 4>I would like to break down what happens in the entirety in the TopSpots component... First, it is defined. We have "const TopSpots = ({ spots }) = {" inside of the parenthesis, we have our prop. The => signifies the start of a function with 'spots' being its 'parameters' its accepting. Then the return statement is made and after that we have a div which is the container to hold everything (since we can techincally only return one thing in react, it must be in some kind of container). We MAP the object that we got passed down from spots into an array called 'topspot' note that this one isn't 'topspot(s).' It also has an index so we can get everything in the table. map is a function that iterates everything in this object and spits out the information in whatever format that we tell it to return. Please note that there is another fat arrow '=>' right after map, indicating so. Now, inside of this function we have another div that contains the 'key' to the object so we can extract specific key:value pairs. We are then sending it to another component named <TopSpot> with the props being the individual key:value pairs so that we can orgainize the information that we are given.

<step 5>We are now in TopSpot.jsx. This is where the data is recieved and composed into user-readable data. Similar to above, we have our componenet name which is TopSpot which accepts the props ({ name, description, locations}). and inside of the function, it returns a div element with everything in it's final format. In this case, we have cards displaying everything from that we recieved from the <TopSpots> component.

<conclusion>For a quick recap, so that I can at least hope to cement some of this information inside of my head...
1. We get data from the URL thorugh Axios and put it in a state.
2. We use use that state to send it to a component named <TopSpots> with prop named {spots}
3. TopSpots takes data from spots and returns a mapped version of spots and then places them in more props for use with the next component.
4. The props are sent from <TopSpots> to <TopSpot> in the form of {name, description, and location}
5. TopSpot takes this data and wraps it inside of a div element styled as cards.

}