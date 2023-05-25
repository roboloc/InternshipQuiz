import React from 'react';


class Home extends React.Component{
    //var arr = ["images/about-bg.jpg", "images/bg.jpg"];
    //var i = 0;
    //imageSlider
    // next.addEventListener('click', function(){
    //     i++;
    //     if(i > arr.length - 1){
    //         i = 0;
    //     }
    //     document.getElementById('image').src = arr[i];
    // })
    
    // prev.addEventListener('click', function(){
    //     i--;
    //     if(i < 0){
    //         i = arr.length - 1;
    //     }
    //     document.getElementById('image').src = arr[i];
    // })
   
    state = {
        field: {
            name: '',
            email: '',
            message: ''  
        },
    
        errors: {
            name: '',
            email: '',
            message: ''  
        }
}

    FormValidate(name,value){
        if(value == ""){       
            return 'This field is required';
        }else{
            return false;
        }
    }

    
    // FormValidateEmail(name,value){
    //     if(value == "" && value.indexOf("@") == -1 == -1 && value.indexOf(".") == -1){       
    //         return 'Invalid Email Adress';
    //     }else{
    //         return false;
    //     }
    // }

    valid = (event) => {
        const {value,name} = event.target
        this.setState({[name]: value})
        const error = this.FormValidate(name,value)
        console.log(error)
    }

    submit = (event) =>{
        event.preventDefault()
        const {name,email,message} = this.state
        console.log({name,email,message})
    }

    handleFormOnSubmit =(event) => {
      const {field,errors} = this.state
      const {value,name} = event.target
      const error = this.FormValidate(name,value)
      this.setState({
        field: {
            ...field,
            [name]:value
            },
        errors: {
            ...errors,
            [name]:error
            }
        })
    }

    render(){
        return( 
        <div>            
            <div class="menu-bar">  
                <ul class="menu-link">
                <h1 class="judul-homepage" >Company</h1>
                    <li>About
                        <ul class="dropdown-menu">
                            <li>History</li>
                            <li>Vision Mission</li>
                        </ul>
                    </li>
                    <li class="dropdown-responsive">Food</li>
                    <li class="dropdown-responsive">Drink</li>
                    <li class="dropdown-responsive">Dessert</li>
                    <li>About Us</li>
                    <li>Location</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div class="banner">
                <img src="images/about-bg.jpg" id="image"></img>
            </div>

            {/* <div class="banner">
                <img src="images/bg.jpg" id="image"></img>
            </div> */}
            
            <div class="Nilai">
                <h1>Our Values</h1>
                <div class="Nilai-Pilar">
                    <div class="Nilai-pilar-gambar-lampu">
                        <img class ="resize-Nilai-pilar-gambar-lampu" src="images/lightbulb-o.png" />
                        <h2>Inovative</h2>
                        <p>Loren Ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolerem deserunt, unde, eaque ipsa?</p>
                    </div>
                    <div class="Nilai-pilar-gambar-bank">
                        <img class ="resize-Nilai-pilar-gambar-bank" src="images/bank.png"/>
                        <h2>Loyalty</h2>
                        <p>Loren Ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolerem deserunt, unde, eaque ipsa?</p>
                    </div>
                    <div class="Nilai-pilar-gambar-balance">
                        <img class ="resize-Nilai-pilar-gambar-balance" src="images/balance-scale.png" />
                        <h2>Respect</h2>
                        <p>Loren Ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolerem deserunt, unde, eaque ipsa?</p>
                    </div>
                </div>
                <div>
                    <h1 class="ContactUs">Contact Us</h1>
                    <form method="POST" action="#" id="ContactUs" onSubmit={this.submit}>
                        <div class="ContactUs-name">
                            <label class="name" for="name">Name:</label><br/>
                            <input class="input-name" id="name" name = "name" 
                            value ={this.state.name}
                            onChange ={this.valid} /> 
                            {/* <p>{errors.name}</p> */}
                        </div>
                        <div class="email-section">
                            <label class="email" for="email">Email:</label><br/>
                            <input class="email-name" type="text" id="email" name = "email" 
                            value ={this.state.email}
                            onChange ={this.valid}/> 
                            {/* <p>{errors.email}</p> */}
                        </div>
                        <div class="from-section">
                            <label class="message" for="">Message:</label><br/>
                            <textarea class="message-name"  id="message" name=" message"
                            value ={this.state.message}
                            onChange ={this.valid} />
                            {/* <p>{errors.message}</p> */}
                        </div>
                        <div class="submit-btn">
                            <input class="submit-btn-size" type="submit" value="SUBMIT" />
                        </div>

                        <div class="margin-btm"/>
                    </form>
                </div>
            </div>

        </div>
        )
    }
}


export default Home;
