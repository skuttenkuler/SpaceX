import React from 'react'
import { Authorization } from '../../firebase/Authorization'
import {Nav} from '../../components/Nav/Nav';
//import { db } from '../../firebase';
//import { Username } from '../../components/Username/Username';
import Rockets from "../../components/Rockets/Rockets"

class HomeComponent extends React.Component{
    constructor(props: any){
        super(props);

        this.state ={
            user: null
        };
    }
    // public componentDidMount() {
    //     db.getUser().then(snapshot =>
    //       this.setState(() => ({ users: snapshot.val() }))
    //     );
    //   }
      public render() {
        // const { users }: any = this.state;
        return(
            <div className="MainPage">
                <Nav/>
                {/* <Username users={users} /> */}
                <h1>HOME</h1>
                {/* welcome userName */}
                {/* history of Space x */}
                <p>What started as a project to land a miniture greenhouse and grow plants on Mars quickely evolved into making human life Multiplanetary.
                    In 2002, Elon Musk founded SpaceX with an initial goals of reducing costs for space travel and the eventual colonization of Mars.
                    By the end of 2012, Space X had over 40 launches and accumlated close to $4 billion in contract revenue from both the United States Air Force and NASA.
                    The Falcon launch vehicle has become the hallmark of SpaceX's rockets and is the first orbital class rocket capable of reflight.
                    SpaceX's key breakthrough in space travel cost is resusablility by rockets having the ability to launch and land. Currently SpaceX is working on sending privately
                    crewed dragon spacecraft beyond the moon.</p>
                {/* what is the app */}
                <p>This is app is for any SpaceX and Falcon9 enthusiants.</p>
                {/* rockets */}
                {/* stats of boosters */}
                <Rockets/>
                {/* stats of launches */}
                {/* map of launches */}

            </div>
        )
    }
}
export default HomeComponent;
const authCondition = (authUser: any) => !!authUser;
export const Home = Authorization(authCondition)(HomeComponent)