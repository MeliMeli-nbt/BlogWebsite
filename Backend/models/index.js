const {sequelize, connectToDb} = require('../config/db');
const User = require('./User');
const Group = require('./Group');
const UserGroup = require('./UserGroup');
const Category = require('./Category');
const Post = require('./Post');
const Tag = require('./Tag');
const PostTag = require('./PostTag');
const Comment = require('./Comment');
const ImagePage = require('./ImagePage');
const Content = require('./Content');
const Page = require('./Page');

// Kết nối và đồng bộ cơ sở dữ liệu
async function syncDatabase() {
  try {
    await connectToDb();

    await User.sync(); // Đồng bộ hóa bảng User
    await Category.sync(); 
    await Post.sync(); 
    await Tag.sync();
    await Group.sync(); // Đồng bộ hóa bảng Group
    await UserGroup.sync(); // Đồng bộ hóa bảng UserGroup
    await PostTag.sync();
    await Comment.sync();
    await Page.sync();
    await Content.sync();
    await ImagePage.sync();
    
    console.log('Đã tạo cơ sở dữ liệu thành công.');
  } catch (error) {
    console.error('Không thể kết nối và tạo cơ sở dữ liệu:', error);
  }
}

syncDatabase();

