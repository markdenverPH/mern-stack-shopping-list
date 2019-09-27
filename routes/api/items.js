import express from 'express';
const router = express.Router();

// Item Model
import Item from '../../models/Item';

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()  // promise base
        .sort({ date: -1 }) // sort by date, and descending because of "-1"
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()  // promise base
        .then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete an item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.remove()
                .then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ success: false}));
});

export default router;