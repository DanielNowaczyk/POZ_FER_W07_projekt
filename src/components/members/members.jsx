import React from "react";
import styles from "./members.scss";
import playersSrc from "../../players.txt";

 class Members extends React.Component{
     constructor(...args) {
         super(...args);
         this.state = {
             members: []
         };
     }

     componentDidMount() {
         this.loadData();
     }

     loadData() {
         this.fetchMembersOfAlliance({ allianceID: 263 }).then(
             members => this.setState({ members })
         )
     }

     fetchMembersOfAlliance({ allianceID }) {
         return fetch(playersSrc)
             .then(res => {
                 return res.text();
             })
             .then(res => {
                 const data = res.replace(/\+/g,' ')+"\n";
                 const playersTab = [];
                 const players = data.split("\n");

                 for (const player of players) {
                     if (player.trim() !== "") {
                         const tab = player.split(",");
                         const ob = {
                             id : parseInt(tab[0], 10),
                             name : tab[1],
                             allianceID : parseInt(tab[2], 10),
                             points : parseInt(tab[3], 10),
                             rank : parseInt(tab[4], 10),
                             towns : parseInt(tab[5], 10),
                         };
                         playersTab.push(ob);
                     }
                 }
                 const sojusz=playersTab.filter(el => {
                     return el.allianceID === allianceID;
                 });
                 console.log(sojusz);
                 const nsojusz=[...sojusz];
                 nsojusz.sort(compareNumbers);
                 function compareNumbers(a, b) {
                     return a.rank - b.rank
                 }
                 console.log(nsojusz);
                 return nsojusz
             });
     }

     renderMembers() {
         return (
                 <table>
                     <thead>
                     <tr>
                         <th> Miejsce </th>
                         <th> Nick </th>
                         <th> Punkty </th>
                         <th> Miasta </th>
                     </tr>
                     </thead>
                     <tbody>
                     {
                         this.state.members.map((el,index)=>{
                             return <tr key={ `member_${el.id}` }>
                                 <td>{index+1}</td>
                                 <td>{el.name}</td>
                                 <td>{el.points}</td>
                                 <td>{el.towns}</td>
                             </tr>
                         })
                     }
                     </tbody>
                 </table>


         );
     }

     render() {
        return <div className={styles.membersList}>
            { this.renderMembers() }
        </div>
    }
}

export default Members;