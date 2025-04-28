import College from "./components/College";

function App(){
  let college = [
    {
      name:'IET Almer',
      city:'Almer',
      website:'www.almer.com',
      students:[
        {
          name:'Amal',
          email:'amal@gmail.com',
          age:29

        },
        {
          name:'Vinay',
          email:'vinay@gmail.com',
          age:25

        },
        {
          name:'Ashok',
          email:'ashok@gmail.com',
          age:20

        }

      ]
    },
    {
      name:'JV',
      city:'Kolkata',
      website:'www.jv.com',
      students:[
        {
          name:'Amal',
          email:'amal@gmail.com',
          age:29

        },
        {
          name:'Vinay',
          email:'vinay@gmail.com',
          age:25

        },
        {
          name:'Ashok',
          email:'ashok@gmail.com',
          age:20

        }

      ]
    },
    {
      name:'IIT Delhi',
      city:'Delhi',
      website:'www.iitd.com',
      students:[
        {
          name:'Amal',
          email:'amal@gmail.com',
          age:29

        },
        {
          name:'Vinay',
          email:'vinay@gmail.com',
          age:25

        },
        {
          name:'Ashok',
          email:'ashok@gmail.com',
          age:20

        }

      ]
    }
  ]
  return(
    <div>
      <h1>Array Nested Looping using Component</h1>
      {
        college.map((item,index)=>(
          <div key={index}>
             <College college={item}/>

          </div>
        ))
      }
    </div>
  )
}

export default App;