const Insert_User = `INSERT INTO public.users("firstName", "lastName", email, password, salt) VALUES('@firstName','@lastName','@email','@password','@salt')`;
const Get_All_Emails = `SELECT email FROM users`;
const Get_All_Products = `SELECT * FROM products`
const Get_All_News = `SELECT * FROM news`

module.exports = {
    Insert_User,
    Get_All_Emails,
    Get_All_Products,
    Get_All_News
}
