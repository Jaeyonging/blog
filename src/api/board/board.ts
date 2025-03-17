import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API_URL } from "../../util/server";

export const writeBlogs = async (uid: string, pid: string | null = null, title: string, descr: string, tags: string[], content: string, files: File[]) => {
  const formData = new FormData();
  if (files.length > 0) {
    files.forEach(file => formData.append('files', file));
  }
  formData.append('uid', uid);
  formData.append('pid', pid || '');
  formData.append('title', title);
  formData.append('descr', descr);
  formData.append('content', content);
  tags.forEach(tag => formData.append('tags[]', tag));

  const response = await axios.post(`${API_URL}/writeBlogs`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

export const getBoardById = async (bid: string) => {
  const response = await axios.post(`${API_URL}/getBoardById`, { bid });
  return response.data;
}

export const getBlogs = async (filter: string, tag: string) => {
  const response = await axios.post(`${API_URL}/getBlogs`, { filter, tag });
  return response.data;
}

export const viewBlog = async (bid: string) => {
  const response = await axios.post(`${API_URL}/viewBlog`, { bid });
  return response.data;
}

export const addLike = async (bid: string, uid: string) => {
  const response = await axios.post(`${API_URL}/addLike`, { bid, uid });
  return response.data;
}

const addComment = async (bid: string, content: string, uid: string) => {
  const response = await axios.post(`${API_URL}/addComment`, { bid, content, uid });
  return response.data;
}

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ bid, content, uid }: any) => addComment(bid, content, uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getBoardById');
      },
      onError: (error) => {
        console.error("댓글 추가 실패:", error);
      },
    }
  );
};

export const addProject = async (uid:string, pid: string | null = null, type: string, title: string, start: string, end: string, content: string, files: File[]) => {
  const formData = new FormData();
  if (files.length > 0) {
    files.forEach(file => formData.append('files', file));
  }
  formData.append('uid', uid);
  formData.append('pid', pid || '');
  formData.append('type', type);
  formData.append('title', title);
  formData.append('start', start);
  formData.append('end', end);
  formData.append('content', content);

  const response = await axios.post(`${API_URL}/addProject`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

export const getProjects = async() => {
  const response = await axios.get(`${API_URL}/getProjects`);
  return response.data;
}

export const getComments = async() => {
  const response = await axios.get(`${API_URL}/getComments`);
  return response.data;
}

export const getProjectById = async(pid: string) => {
  const response = await axios.post(`${API_URL}/getProjectById`, {pid});
  return response.data;
}

export const getBoardByPid = async(pid: string) => {
  const response = await axios.post(`${API_URL}/getBoardByPid`, {pid});
  return response.data;
}

export const deleteComment = async(id: string) => {
  const response = await axios.post(`${API_URL}/deleteComment`, {id});
  return response.data;
}

export const getVisitBoard = async() => {
  const response = await axios.get(`${API_URL}/getVisitBoard`);
  return response.data;
}

export const writeVisit = async(uid: string, message: string) => {
  const response = await axios.post(`${API_URL}/writeVisit`, {uid, message});
  return response.data;
}

export const deleteBlogById = async(bid: string) =>{
  const response = await axios.post(`${API_URL}/deleteBlogById`, {bid});
  return response.data;
}