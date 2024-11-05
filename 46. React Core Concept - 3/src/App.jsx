import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import ReusableForm from './Components/Reusable Form/ReusableForm'
// import RefForm from './Components/RefForm/RefForm'
// import HookForm from './HookForm/HookForm'
// import SimpleForm from './Components/Simple Form/SimpleForm'
// import StateForm from './Components/StateForm/StateForm'
function App() {

  const handleSignUpSubmit = data => {
    console.log('signup data', data)
  }
  const handleUpdateProfile = data => {
    console.log('update profile', data)
  }
  return (
    <>
      <h1>Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Signup</h2>
        <p>Signup write now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} submitBtnText='Update' 
      handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update</h2>
        <p>Update write now</p>
        </div>
      </ReusableForm>
      <h1>Components</h1>
      <Grandpa></Grandpa>
    </>
  )
}

export default App
