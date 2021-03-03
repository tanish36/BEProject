import React, { useState, useEffect } from 'react'
import RecommendService from './services/recommend-service'
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from 'react-bootstrap/Table'

function Recommendation() {

    const [Data, setData] = useState(null)

    useEffect(() => {

        if (localStorage.getItem("Recommendation") == null) {
            RecommendService.getData().then((response) => {
                setData(localStorage.getItem("Recommendation"))
            }, (error) => {

            })
        } else {
            setData(localStorage.getItem("Recommendation"))
        }
    }, [])

    return (
        <div>
            <h1>Recommendation System</h1>
            {
                Data == null ?
                    <CircularProgress /> : <TableData Data={JSON.parse(Data)} />
            }
        </div>
    )
}


function TableData({ Data }) {


    var cnt = 1;
    var cnt2 = 1;
    var cnt3 = 1;

    useEffect(() => {

        var keys = Object.keys(Data.tags);

        for (var i = 0; i < keys.length; i++) {
            // tags.push(Data.tags[keys[i]])
            console.log(Data.tags[keys[i]])
        }
    }, [])

    return (
        <div>
            <h2>Practice</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Problem Name</th>
                        <th>Tags</th>
                        <th>Links   </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Object.keys(Data.tags).map(key => {

                            return (
                                Data.tags[key].map(k => {
                                    return (
                                        <tr >
                                            <td>{cnt++}</td>
                                            <td>{k[0]}</td>
                                            <td>{key}</td>
                                            <td><a href={k[1]}>{k[1]}</a></td>
                                        </tr>
                                    );
                                })
                            )
                        })
                    }

                </tbody>
            </Table>


            <h2>Watch Videos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tags</th>
                        <th>Video Links   </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Object.keys(Data.vurls).map(key => {

                            return (
                                Data.vurls[key].map(k => {

                                    if (k != null)
                                        return (

                                            <tr >
                                                <td>{cnt2++}</td>
                                                <td>{key}</td>
                                                <td><a href={k}>{k}</a></td>
                                            </tr>

                                        );
                                    return null
                                })
                            )
                        })
                    }

                </tbody>
            </Table>



            <h2>Tutorials</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tags</th>
                        <th> Tutorial Links   </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Object.keys(Data.curls).map(key => {

                            return (
                                Data.curls[key].map(k => {

                                    if (k != null)
                                        return (

                                            <tr >
                                                <td>{cnt3++}</td>
                                                <td>{key}</td>
                                                <td><a href={k}>{k}</a></td>
                                            </tr>

                                        );
                                    return null
                                })
                            )
                        })
                    }

                </tbody>
            </Table>

        </div >
    )
}

export default Recommendation
