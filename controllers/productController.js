const mongoose = require('mongoose');
const PRODUCT = mongoose.model('product');

exports.product = {
    addProducts: async (req, res) => {
        try {
            const added = await PRODUCT.create(req.body);
            if (!added) {
                return res.json({
                    isSuccess: false,
                    Result: 'failed to create'
                })
            } else {
                return res.json({
                    isSuccess: true,
                    Result: 'product created successfully'
                })
            }
        } catch (error) {
            console.log(error);
            return res.json({
                isSuccess: false,
                Result: error
            })
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const products = await PRODUCT.find({});
            return res.json({
                isSuccess: true,
                Result: products
            })
        } catch (error) {
            return res.json({
                isSuccess: false,
                Result: error
            })
        }
    },
    getProductsById: async (req, res) => {
        try {
            console.log(req.query);
            const product = await PRODUCT.findById({
                _id: req.query._id
            });
            if (!product) {
                return res.json({
                    isSuccess: false,
                    Result: 'product not available'
                })
            } else {
                return res.json({
                    isSuccess: true,
                    Result: product
                })
            }

        } catch (error) {
            return res.json({
                isSuccess:false,
                Result:error
            })
        }
    },
    updateProductDetails: async (req,res)=>{
        try {
            const update = await PRODUCT.findByIdAndUpdate({_id:req.body._id},req.body);
            if(!update){
                return res.json({
                    isSuccess:false,
                    Result:'failed to update'
                })
            }else{
                return res.json({
                    isSuccess:true,
                    Result:'updated successfully',
                    Data:update
                })
            }
        } catch (error) {
            return res.json({
                isSuccess:false,
                Result:error
            })
        }
    },
    deleteProductsDetail: async (req,res) => {
        try {
            const deleted = await PRODUCT.findByIdAndDelete({_id:req.params._id});
            if(!deleted){
                return res.json({
                    isSuccess: false,
                    Result:'failed to delete !'
                })
            }
            else{
                return res.json(
                    {
                        isSuccess:true,
                        Result:'Deleted successfully !'
                    }
                )
            }
        } catch (error) {
            return res.json({
                isSuccess:false,
                Result:error
            })
        }
    }
}