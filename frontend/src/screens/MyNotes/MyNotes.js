import React, { useEffect } from 'react'
import { Button, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import notes from '../../components/data/notes'
import MainScreen from '../../components/MainScreen'
import axios from 'axios'
const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
        }
      };

      const fetchNotes = async() => {
        const data = await axios.get('/api/notes');
        console.log(data);
      };
      useEffect(() => {
        fetchNotes();
      }, []);

  return (
    <MainScreen title="Welcome Back Aradhya Garg">
        <Link to = "createnote">
            <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
                Create New Node
            </Button>
            </Link>
            {notes.map((note) => (
                <Card style={{ margin: 10}}>
                <Card.Header style={{display: "flex"}}>
                    <span style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                    }}>
                         {note.title}
                    </span>
                    <div>
                        <Button href={`/note/${note._id}`}>
                            Edit
                        </Button>
                        <Button variant='danger' className='mx-2' onClick={() => 
                            deleteHandler(note._id)}>
                            Delete
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <h4>
                        <Badge variant="success">
                            Category - {note.category}
                        </Badge>
                    </h4>
                    <blockquote className='blockqoute mb-0'>
                        <p>
                            {note.content}
                        </p>
                        <footer className='blockquote-footer'>
                            Created On - data
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            ))}
    </MainScreen>
  )
}

export default MyNotes