const express = require('express');
const { marked } = require('marked');

const router = express.Router();
const Blogs = require('../modal/blog');

router.get('/', async (req, res) => {
  try {
    const blog = await Blogs.find({}).sort({ createTime: -1 });
    blog.forEach((el, index) => {
      blog[index].content = marked.parse(el.content).slice(0, 320);
    });

    res.render('pages/blog', {
      title: 'Blog',
      metaDetail: req.metaData,
      subTitle: '',
      blog,
    });
  } catch (err) {
    res.redirect('/');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogDetail = await Blogs.findOne({ urlTitle: req.params.id });
    blogDetail.content = marked.parse(blogDetail.content);
    res.render('pages/blogdetail', {
      blogDetail, metaDetail: req.metaData, title: 'Blog', subTitle: '',
    });
  } catch (err) {
    res.redirect('/blog');
  }
});

router.get('/author/trackolap', async (req, res) => {
  try {
    const blog = await Blogs.find({}).sort({ createTime: -1 });

    blog.forEach((el, index) => {
      blog[index].content = marked.parse(el.content).substr(0, 320);
    });

    res.render('pages/author', {
      metaDetail: req.metaData,
      blog,
      title: 'Blog',
      subTitle: '',
    });
  } catch (err) {
    res.redirect('/blog');
  }
});

module.exports = router;
