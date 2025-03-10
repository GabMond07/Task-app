import { set, useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/Task.api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";


export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue } = useForm() //Guardar los datos del form en variables 
  const navigate = useNavigate()
  const params = useParams()  //Para visualizar urls

  const onSubmit = handleSubmit(async data => { // Guarda los datos en variable
    if (params.id) {
      await updateTask(params.id, data)
      toast.success('Tarea actualizada', { // Biblioteca de alertas
        position: 'bottom-center',
        style: {
          background: 'black',
          color: "white"
        }
      })
    } else {
      await createTask(data);
      toast.success('Tarea creada', {
        position: 'bottom-center',
        style: {
          background: 'black',
          color: "white"
        }
      })
    }
    navigate('/tasks');
  })

  useEffect(() => {
    async function loudTask() {
      if (params.id) {
        const res = await getTask(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      }
    }
    loudTask()
  }, [])




  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="m-3">
        <input type="text"
          placeholder="Titulo"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title required</span>}
        <textarea
          rows="3"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          placeholder="Descripcion"
          {...register("description", { required: true })}></textarea>
        {errors.description && <span>Description required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">save</button>
      </form>
      <div className="flex justify-end m-3">
        {params.id && <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3 "
          onClick={async () => {
            const accepted = window.confirm('Are you sure?')
            if (accepted) {
              await deleteTask(params.id);
              toast.success('Tarea eliminada', {
                position: 'bottom-center',
                style: {
                  background: 'black',
                  color: "white"
                }
              })
              navigate('/tasks');
            }
          }}
        >Delete</button>}
      </div>
    </div>
  )
}
