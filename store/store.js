
const reducer = (state = {
    receiver : "",
    signin : {
        email : "shayanmustafa1@gmail.com",
        password : "wajahat123",
        as : "university"
    },
    imageURL : "",
    students : [{name : "Wajahat"},
                {name : "Hamza"},
                {name : "Atif"},
                {name : "Aun"},
                {name : "Rehman"}],
    messages : [],
    AllPosts : [],
    AllFeedacks: [{
        email : "shayanmustafa11@gmail.com",
        fulfillingCriteria : "Good",
        requirementFulfill : "Yes",
        searchingFor : "Job",
        webExperience  :"Excellent",
        comments : "very good"
    }],
    msgBoxTitles : [],
    openMsgWindow : "",
    sortBy : "name",
    users : [
        {name : "Wajahat",cgpa : "3.4",as:"university",description : "I am university student",cv: "",resume : "",img:""},
        {name : "Aun",cgpa : "1.2",as:"student",description : "I am university student",cv: "",resume : "",img:""},
        {name : "Atif",cgpa : "2.4",as:"student",description : "I am university student",cv: "",resume : "",img:""},
        {name : "Hamza",cgpa : "3.6",as:"student",description : "I am university student",cv: "",resume : "",img:""},
        {name : "Zafar",cgpa : "1.1",as:"student",description : "I am university student",cv: "",resume : "",img:""}
    ]

}, action) => {
    switch (action.type) {
        case 'INSERT_POST':
            state = {
                ...state,
                AllPosts : [...state.AllPosts,{
                    text:action.postText,
                    img:action.imageURL,
                    name : "unknown",
                    likes : []
                }]
            };
            console.warn("All Posts",state.AllPosts)
            break;
        case 'INSERT_FEEDBACK':
            state = {
                ...state,
                AllFeedacks : [...state.AllFeedacks,action.feedback]
            };
            console.warn("All Feedbacks",state.AllFeedacks)
            break;
        case 'MSG_BOX_TITLES':
            state = {
                ...state,
                msgBoxTitles : action.msgBoxTitles
            };
            console.log("msgBoxTitles",state.msgBoxTitles)
            break;
        case 'OPEN_MSG_WINDOW':
            state = {
                ...state,
                openMsgWindow : action.openMsgWindow
            };
            // console.log("openMsgWindow",state.openMsgWindow)
            break;
        case 'REMOVE_NAME_FROM_MSG_TITLES':
            const duplicate = [...state.msgBoxTitles]
            duplicate.splice(action.elemIndex,1)
            state = {
                ...state,
                msgBoxTitles : duplicate
            };
            // console.log("removing msgBox",state.msgBoxTitles)
            break;
        case 'SIGNIN':
            state = {
                ...state,
                signin : action.signin
            };
            console.warn("signin",state.signin)
            break; 
        case 'SET_RECEIVER':
            state = {
                ...state,
                receiver : action.receiver
            };
            // console.log("receiver",action.receiver)
        break; 
        case 'SEND_MSG':
            state = {
                ...state,
                messages : [...state.messages,{sender:state.signin,receiver : state.receiver,msg:action.msg}]
            };
            // console.log("messages",state.messages)
        break;
        case "SEARCH_TEXT":
            state ={
                ...state,
                searchText : action.searchText
            }
            // console.log("search text",state.searchText)
        break
        case "SORT_BY" :
            state = {
                ...state,
                sortBy : action.sortBy
            }
            // console.log("sortBY",state.sortBy)
        break
        case "STUDENTS":
            state ={
                ...state,
                students : action.students
            }
            // console.log("students",state.students)
        break
        case "ALL_POSTS":
            state ={
                ...state,
                AllPosts : action.allPosts
            }
        break
        case "LIKE":
            // console.log("AllPosts",state.AllPosts[action.index].like)
            let tempArr = [...state.AllPosts]
            let likeValue = tempArr[action.index].like
            tempArr[action.index].like = !likeValue
            state ={
                ...state,
                AllPosts : tempArr
            }
            // console.log("AllPosts",state.AllPosts[action.index].like)
            // return state
        break
        default :
               return state 

    }
    return state
};

// const cartStore = createStore(productReducer, applyMiddleware(logger));

export default reducer;