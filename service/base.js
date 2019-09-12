import $http from '@/config/http'

export const uploadImg = (data={})=>{
	data.url='/api/Common/upload'
	return $http.uploadFile(data)
}
export const addGood = (data)=>{
	return $http.post("/api/good/upload_good",data)
}
