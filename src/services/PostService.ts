import apiClient from "@/helpers/apiClient";
import { Post } from "@/models/Post";
import { AxiosResponse } from "axios";
import _ from "lodash";

export class PostService {

    async fetchAll(): Promise<Post[]> {
        try {
            let response: AxiosResponse = await apiClient.get('/api/list');
            if (response.status === 200 && _.isArray(response.data)) {
                return Promise.resolve(response.data.map(x => new Post(x)))
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
        return [];
    }

    async subscribe(email: string): Promise<string> {
        try {
            let response: AxiosResponse = await apiClient.post('/api/newsletter', { email });
            if (response.status === 200) {
                return response?.data?.message;
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
        return '';
    }

    //   async create(todo: Todo): Promise<Todo | null> {
    //     try {
    //       const response = await fetch('http://localhost:3001/todos', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(todo),
    //       });
    //       if (!response.ok) {
    //         throw new Error(
    //           `Unexpected error ${response.status}: ${response.statusText}`
    //         );
    //       }
    //       return await response.json();
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //       return null;
    //     }
    //   }

    //   async fetchById(id: string): Promise<Todo | null> {
    //     try {
    //       const response = await fetch(`http://localhost:3001/todos/${id}`);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return await response.json();
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //       return null;
    //     }
    //   }

    //   async update(id: string, updatedTodo: Partial<Todo>): Promise<Todo | null> {
    //     try {
    //       const response = await fetch(`http://localhost:3001/todos/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(updatedTodo),
    //       });
    //       if (!response.ok) {
    //         throw new Error(
    //           `Unexpected error ${response.status}: ${response.statusText}`
    //         );
    //       }
    //       return await response.json();
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //       return null;
    //     }
    //   }

    //   async delete(id: string): Promise<boolean> {
    //     try {
    //       const response = await fetch(`http://localhost:3001/todos/${id}`, {
    //         method: 'DELETE',
    //       });
    //       if (!response.ok) {
    //         throw new Error(
    //           `Unexpected error ${response.status}: ${response.statusText}`
    //         );
    //       }
    //       return true;
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //       return false;
    //     }
    //   }
}
