import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import ExampleForm from "./components/ExampleForm";
import { FormValues } from "./components/ExampleForm";
import { apiService } from "./services";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

function App(): React.JSX.Element {
  const [usersList, setUsersList] = useState([]); 
  const [usersCount, setUsersCount] = useState(20); 

  const handleScroll = () => {
    
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
      
    
      setUsersCount((prevCount) => {
        if((prevCount + 20) > usersList.length) {
          return prevCount += 20
        } else {
          return prevCount += (prevCount + 20) - usersList.length;
        }
     
      }); 
     
       
    }
  };

  // Хук подгрузки пользователей
  const loadUsers = async () => {
    try {
      const usersData = await apiService.fetchUsers();
      setUsersList(usersData); 
    } catch (err) {
      console.error("Ошибка загрузки пользователей:", err);
    }
  };

 
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Отправка формы
  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await apiService.createUser({ id: `${usersList.length + 1}`, ...data }); // Создаём нового пользователя
      loadUsers(); 
    } catch (err) {
      console.error("Ошибка сохранения пользователя:", err);
    }
  };

  // Первичная загрузка пользователей при запуске
  useEffect(() => {
    loadUsers();
  }, []);

  // Возвращаем сокращённый список пользователей
  const limitedUsers = usersList.slice(0, usersCount);
  

  return (
    <div className="App">
      <Home tableData={limitedUsers} />
      <ExampleForm onSubmitForm={handleFormSubmit} />
    </div>
  );
}

export default App;