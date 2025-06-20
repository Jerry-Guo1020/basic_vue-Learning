import { ref, computed } from 'vue';
import { defineStore } from "pinia";
import axios from 'axios';


export const useUserStore = defineStore('user', () => {

    // state: 相当于data，用于存放数据

    const userList = ref([]);                    // 保存所有的用户
    const currentUser = ref(null);             // 当前登录的账户，默认值
    const isLoggedIn = ref(false);             // 是否已经登录了，默认值


    // 放置函数，用于操作 state

    // 注册逻辑
    const register = async (userInfo) => {
        const { username, password } = userInfo;

        try {
            // 检查用户是否已经存在
            const existingUser = await axios.post('http://localhost:3000/users', {
                username,
                password
            });

            if (existingUser.data.success) {
                alert("注册成功！")
                return true;
            } else {
                alert(existingUser.err.message)
                return false;
            }
        } catch (err) {
            alert("注册失败！" + err.message);
            return false;
        }

    };

    // 登录逻辑
    const login = async (userInfo) => {
        const { username, password } = userInfo;

        try {
            // 检查用户和密码是否正确
            const user = await axios.post('http://localhost:3000/api/login', {
                username,
                password
            });

            if (user.data.success) {
                currentUser.value = user.data.user;
                isLoggedIn.value = true;
                return true;
            } else {
                alert(user.data.message)
                return false;
            }
        } catch (err) {
            alert("登录失败" + err.message)
            return false;
        }
    };

    // 退出登录的逻辑
    const logout = async () => {
        try {
            await axios.post();
        }catch(err){
            console.warn("服务器退出失败", err.message);
        }
        currentUser.value = null;
        isLoggedIn.value = false;
    };

    return {
        userList,
        currentUser,
        isLoggedIn,
        register,
        login,
        logout
    };

});
