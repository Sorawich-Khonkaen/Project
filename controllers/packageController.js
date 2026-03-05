const Package = require('../models/Package');
const { Op } = require('sequelize');

const toBool = (v) => v === "true" || v === "on" || v === true;
const toInt = (v, fallback = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : fallback;
};

exports.getAllPackages = async (req, res) => {
    try {
        const q = (req.query.q || "").trim();
        const where = q ? {
            [Op.or]: [
                { package_name: { [Op.like]: `%${q}%` } },
                { description: { [Op.like]: `%${q}%` } }
            ]
        } : {};

        const packages = await Package.findAll({ where, order: [["id", "DESC"]] });
        res.render("packages/index", { packages, q });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createForm = (req, res) => {
    res.render("packages/new");
};

exports.createPackage = async (req, res) => {
    try {
        const payload = {
            package_name: (req.body.package_name || "").trim(),
            description: (req.body.description || "").trim() || null,
            price: toInt(req.body.price, 0),
            session_count: toInt(req.body.session_count, 1),
            duration_days: req.body.duration_days ? toInt(req.body.duration_days, null) : null,
            is_active: toBool(req.body.is_active),
        };
        await Package.create(payload);
        res.redirect("/packages");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// 🌟 ฟังก์ชัน Show (ดูรายละเอียด) ที่เพิ่มเข้ามาให้ครับ
exports.show = async (req, res) => {
    try {
        const pkg = await Package.findByPk(req.params.id);
        if (!pkg) return res.status(404).send("Package not found");
        res.render("packages/show", { pkg });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.editForm = async (req, res) => {
    try {
        const pkg = await Package.findByPk(req.params.id);
        if (!pkg) return res.status(404).send("Package not found");
        res.render("packages/edit", { pkg });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updatePackage = async (req, res) => {
    try {
        const pkg = await Package.findByPk(req.params.id);
        if (!pkg) return res.status(404).send("Package not found");

        const payload = {
            package_name: (req.body.package_name || "").trim(),
            description: (req.body.description || "").trim() || null,
            price: toInt(req.body.price, 0),
            session_count: toInt(req.body.session_count, 1),
            duration_days: req.body.duration_days ? toInt(req.body.duration_days, null) : null,
            is_active: toBool(req.body.is_active),
        };
        await pkg.update(payload);
        res.redirect("/packages");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deletePackage = async (req, res) => {
    try {
        const pkg = await Package.findByPk(req.params.id);
        if (pkg) await pkg.destroy();
        res.redirect("/packages");
    } catch (err) {
        res.status(500).send(err.message);
    }
};