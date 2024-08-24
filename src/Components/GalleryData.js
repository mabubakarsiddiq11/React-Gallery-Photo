const galleryData = [
    {
        img: "https://plus.unsplash.com/premium_photo-1723632256384-60dd4173debf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width : '70%'
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
        width : '70%'
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nJTIwaW4lMjByZWFjdHxlbnwwfHwwfHx8MA%3D%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1591267990439-bc68529677c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
        width : '70%'
        
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1663054500009-d4fc1a8ad953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
        width : '70%'
    },
    {
        img: "https://images.unsplash.com/photo-1576936422505-18d321d54d40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1670057037226-b3d65909424f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1672309558498-cfcc89afff25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1661418024989-34555a17e2cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNvZGluZyUyMGluJTIwcmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
  
];

export default galleryData