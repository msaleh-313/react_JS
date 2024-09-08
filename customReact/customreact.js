function customRender(reactElement,container){
    //****************************************************** */
    // //create dom element to be append/inject in the root 

            // const domElement=document.createElement(reactElement.type)
            // domElement.innerHTML = reactElement.children

    // //set attributes to that element

            // domElement.setAttribute('href' ,reactElement.props.href)
            // domElement.setAttribute('target' ,reactElement.props.target)

    // //append that child to the container

            // container.appendChild(domElement)   
    //****************************************************** */
    
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop==='children') continue  //purana way hay prop k andr e children ata tha ab ni ata
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)

}
const reactElement={
    type: 'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
        
    },
    children:'click me'
}


const mainContainer=document.querySelector("#root")

customRender(reactElement,mainContainer)