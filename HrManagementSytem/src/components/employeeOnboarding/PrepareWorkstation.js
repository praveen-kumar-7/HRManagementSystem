import React, { useState } from 'react';
import { 
  Container,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function PrepareWorkstation() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up workstation with necessary equipment', completed: false },
    { id: 2, title: 'Install required software', completed: false },
    { id: 3, title: 'Assign workstation location', completed: false }
  ]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Prepare Workstation Checklist
      </Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 4 }} />

      {tasks.map(task => (
        <Card key={task.id} sx={{ mb: 2, backgroundColor: task.completed ? '#d4edda' : 'inherit' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {task.title}
            </Typography>
            <Typography variant="body2">
              {task.completed ? 'Completed' : 'Pending'}
            </Typography>
            <Button 
              variant="contained" 
              color={task.completed ? 'error' : 'primary'} 
              onClick={() => toggleTaskCompletion(task.id)}
              sx={{ mt: 2 }}
            >
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </Button>
          </CardContent>
        </Card>
      ))}

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Equipment Checklist
          </Typography>
          <List>
            {['Computer/Laptop', 'Monitor', 'Keyboard and Mouse', 'Desk and Chair', 'Phone'].map(item => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Software Checklist
          </Typography>
          <List>
            {['Operating System', 'Office Suite', 'Specialized Software', 'Security Software'].map(item => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PrepareWorkstation;
