import React from 'react'
import { useNavigate } from 'react-router-dom'
import { withStyles } from '@mui/styles'
import { Button, Divider, Grid, InputBase, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import dropdown from '../assets/icn_dropdown.svg'
import searchIcon from '../assets/icn_search 1.svg'
import icn_Inventory from '../assets/icn_Inventory Reports.svg'
import DBService from '../db'

const styles = theme => ({
    divider: {
        height: '2px',
        backgroundColor: theme.palette.secondary.light,
        border: 'none !important'
    },
    items: {
        borderRight: `3px solid ${theme.palette.secondary.light}`
    },
    createEditItem: {
        borderBottom: `3px solid ${theme.palette.secondary.light}`
    },
    marginTop: {
        marginTop: theme.spacing(15)
    },
    table: {
        border: `2px solid ${theme.palette.secondary.light}`
    },
    head: {
        backgroundColor: theme.palette.secondary.lightest,
        color: `${theme.palette.secondary.main} !important`,
        fontWeight: 'bold !important'
    },
    cell: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)} !important`
    },
    headCell: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)} !important`,
        color: `${theme.palette.secondary.main} !important`,
        fontWeight: 'bold !important'
    },
    tableRow: {
        borderLeft: `2px solid ${theme.palette.secondary.light}`,
        borderRight: `2px solid ${theme.palette.secondary.light}`,
        borderBottom: `2px solid ${theme.palette.secondary.light}`,
        cursor: 'pointer'
    }
})

const Items = props => {
    const db = new DBService('items')
    const { classes } = props
    const navigate = useNavigate()
    const initItem = {
        name: '',
        code: '',
        salesPrice: 0,
        purchasePrice: 0,
        unit: '',
        date: '',
        index: -1
    }
    const [mobile, setMobile] = React.useState('')
    const [values, setValues] = React.useState(initItem)
    const [itemsList, setItems] = React.useState([])
    const [displayItems, setDisplayItems] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [index, setIndex] = React.useState(-1)
    const [sort, setSort] = React.useState('asc')
    const handleChangeName = e => {
        setValues(preVal => ({
            ...preVal,
            name: e.target.value
        }))
    }
    const handleChangeCode = e => {
        setValues(preVal => ({
            ...preVal,
            code: e.target.value
        }))
    }
    const handleChangeSalesPrice= e => {
        setValues(preVal => ({
            ...preVal,
            salesPrice: e.target.value
        }))
    }
    const handleChangePurchasePrice = e => {
        setValues(preVal => ({
            ...preVal,
            purchasePrice: e.target.value
        }))
    }
    const handleChangeUnit = e => {
        setValues(preVal => ({
            ...preVal,
            unit: e.target.value
        }))
    }
    const handleChangeDate = e => {
        setValues(preVal => ({
            ...preVal,
            date: e.target.value
        }))
    }

    const getItems = async () => {
        await db.createObjectStore()
        const result = await db.getAll('items')
        setItems(result)
    }

    const comparator = (obj1, obj2) => {
        if ( obj1.name < obj2.name ){
          return -1;
        }
        if ( obj1.name > obj2.name ){
          return 1;
        }
        return 0;
      }
    const handleSort = () => {
        if (itemsList.length > 0) {
            let newList
            if (sort === 'asc') {
                newList = itemsList
                newList.sort(comparator)
                setDisplayItems(newList)
                setSort('desc')
            } else {
                newList = itemsList
                newList.sort((item1, item2) => comparator(item2, item1))
                setDisplayItems(newList)
                setSort('asc')
            }
        }
    }

    const handleLogout = () => {
        localStorage.setItem('loggedIn', false)
        localStorage.removeItem('token')
        localStorage.removeItem('mobile')
        navigate('/')
    }

    const handleSearch = e => {
        setSearch(e.target.value)
        if (e.target.value) {
            const searchResult = itemsList.filter(item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || item.code.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
            setDisplayItems(searchResult)
        } else {
            setDisplayItems(itemsList)
        }
    }
    const handleSave = async () => {
        const newList = itemsList
        if (index > -1) {
            newList[index] = values
        } else {
            values['index'] = itemsList.length
            newList.push(values)
        }
        setIndex(-1)
        setValues(initItem)
        await db.createObjectStore()
        await db.putValue('items', values)
        getItems()
    }

    React.useEffect(() => {
        if (index > -1) {
            setValues(itemsList.find(item => item.index === index))
        }
        setDisplayItems(itemsList)
    }, [index, itemsList])

    React.useEffect(() => {
        const mobileNum = window.localStorage.getItem('mobile')
        const loggedIn = window.localStorage.getItem('loggedIn')
        const token = window.localStorage.getItem('token')
        if (loggedIn && mobileNum && token) {
            setMobile(mobileNum)
            getItems()
        } else {
            navigate('/')
        }
    }, [])

    return (
        <Grid container>
            <Grid
                item
                container
                xs={12}
                justifyContent='space-between'
                sx={{
                    margin: '10px'
                }}
            >
                <Grid item>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{mobile}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={handleLogout}>Logout</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider className={classes.divider} />
            </Grid>
            <Grid
                item
                container
                xs={12}
            >
                <Grid item container xs={8} direction='column' className={classes.items}>
                    <Grid item sx={{ padding: '10px' }} className={classes.createEditItem}>
                        <Typography variant='h6'>Items</Typography>
                    </Grid>
                    <Grid item container direction='column' sx={{ margin: '20px'}} spacing={2}>
                        <Grid item>
                            <InputBase
                                sx={theme => ({
                                    border: '2px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '5px',
                                    padding: '5px 10px',
                                    color: theme.palette.secondary.main,
                                    width: '300px'
                                })}
                                type='text'
                                onChange={handleSearch}
                                value={search}
                                placeholder='Search Items'
                                startAdornment={<img src={searchIcon} alt='search' />}
                            />
                        </Grid>
                        <Grid item sx={{ marginRight: '60px' }}>
                            <Table>
                                <TableHead className={classes.table}>
                                    <TableRow className={classes.head}>
                                        <TableCell className={classes.headCell} sx={{ cursor: 'pointer' }} onClick={handleSort}>
                                            ITEM NAME
                                        </TableCell>
                                        <TableCell className={classes.headCell}>ITEM CODE</TableCell>
                                        <TableCell className={classes.headCell}>SALES PRICE</TableCell>
                                        <TableCell className={classes.headCell}>PURCHASE PRICE</TableCell>
                                        <TableCell className={classes.headCell}>UNIT</TableCell>
                                        <TableCell className={classes.headCell}>DATE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayItems && displayItems.length > 0 ? displayItems.map((item, index) => (
                                        <TableRow key={index} className={classes.tableRow} onClick={() => setIndex(item.index)}>
                                            <TableCell className={classes.cell}>{item.name}</TableCell>
                                            <TableCell className={classes.cell}>{item.code}</TableCell>
                                            <TableCell className={classes.cell}>₹ {item.salesPrice}</TableCell>
                                            <TableCell className={classes.cell}>₹ {item.purchasePrice}</TableCell>
                                            <TableCell className={classes.cell}>{item.unit}</TableCell>
                                            <TableCell className={classes.cell}>{item.date}</TableCell>
                                        </TableRow>
                                    )) : (
                                        <TableRow>
                                            <TableCell colSpan={6} align='center' sx={{ border: 'none' }}>
                                                <img src={icn_Inventory} alt='inventory' className={classes.marginTop} />
                                                <Typography color='secondary' sx={{ fontWeight: 'bold' }}>You do not have any items to display</Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={4} direction='column'>
                    <Grid item sx={{ padding: '10px' }} className={classes.createEditItem}>
                        <Typography variant='h6'>Create/Edit Items</Typography>
                    </Grid>
                    <Grid item container>
                        <Grid
                            item
                            container
                            xs={12}
                            spacing={1}
                            sx={{
                                margin: '10px'
                            }}
                        >
                            <Grid item xs={6}>
                                <Typography
                                        variant='subtitle1'
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '5px',
                                            color: '#00000081'
                                        }}
                                    >
                                        Item Name*
                                    </Typography>
                                    <InputBase
                                        sx={theme => ({
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '3px',
                                            padding: '5px 15px',
                                            color: theme.palette.secondary.main
                                        })}
                                        fullWidth
                                        type='text'
                                        onChange={handleChangeName}
                                        value={values['name']}
                                        placeholder='Enter Item Name'
                                    />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                        variant='subtitle1'
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '5px',
                                            color: '#00000081'
                                        }}
                                    >
                                        Item Code
                                    </Typography>
                                    <InputBase
                                        sx={theme => ({
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '3px',
                                            padding: '5px 15px',
                                            color: theme.palette.secondary.main
                                        })}
                                        fullWidth
                                        type='text'
                                        onChange={handleChangeCode}
                                        value={values['code']}
                                        placeholder='Enter Item Code'
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        sx={theme => ({
                            padding: '10px 20px',
                            backgroundColor: theme.palette.secondary.lightest
                        })}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>Stock & Pricing Details (Optional)</Typography>
                    </Grid>
                    <Grid item container>
                        <Grid
                            item
                            container
                            xs={12}
                            spacing={1}
                            sx={{
                                margin: '10px'
                            }}
                        >
                            <Grid item xs={6}>
                                <Typography
                                        variant='subtitle1'
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '5px',
                                            color: '#00000081'
                                        }}
                                    >
                                        Sales Price
                                    </Typography>
                                    <InputBase
                                        sx={theme => ({
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '3px',
                                            padding: '5px 15px',
                                            color: theme.palette.secondary.main
                                        })}
                                        fullWidth
                                        type='number'
                                        onChange={handleChangeSalesPrice}
                                        value={values['salesPrice']}
                                        placeholder='0'
                                        startAdornment='₹ '
                                    />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                        variant='subtitle1'
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '5px',
                                            color: '#00000081'
                                        }}
                                    >
                                        Purchase Price
                                    </Typography>
                                    <InputBase
                                        sx={theme => ({
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '3px',
                                            padding: '5px 15px',
                                            color: theme.palette.secondary.main
                                        })}
                                        fullWidth
                                        type='number'
                                        onChange={handleChangePurchasePrice}
                                        value={values['purchasePrice']}
                                        placeholder='0'
                                        startAdornment='₹ '
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid
                            item
                            container
                            xs={12}
                            spacing={1}
                            sx={{
                                margin: '10px'
                            }}
                        >
                            <Grid item xs={6}>
                                <Typography
                                        variant='subtitle1'
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '5px',
                                            color: '#00000081'
                                        }}
                                    >
                                        Measuring Unit
                                    </Typography>
                                    <Select
                                        value={values['unit']}
                                        fullWidth
                                        endAdornment={<img src={dropdown} alt='dropdown' />}
                                        variant='outlined'
                                        native
                                        onChange={handleChangeUnit}
                                        sx={theme => ({
                                            borderRadius: '3px',
                                            color: theme.palette.secondary.main,
                                            height: '45px',
                                            cursor: 'pointer'
                                        })}
                                    >
                                        <option value=''>Select Unit</option>
                                        <option value='pcs'>pcs</option>
                                        <option value='boxes'>boxes</option>
                                        <option value='gms'>gms</option>
                                        <option value='kgs'>kgs</option>
                                        <option value='ltr'>ltr</option>
                                    </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                        variant='subtitle1'
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '5px',
                                            color: '#00000081'
                                        }}
                                    >
                                        Opening Stock Date
                                    </Typography>
                                    <InputBase
                                        sx={theme => ({
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '3px',
                                            padding: '5px 15px',
                                            color: theme.palette.secondary.main
                                        })}
                                        fullWidth
                                        type='date'
                                        onChange={handleChangeDate}
                                        value={values['date']}
                                        placeholder='Select Date'
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ padding: '20px', marginBottom: '100px' }}>
                        <Button
                            fullWidth
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#4c3cce',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#4c3cceea'
                                }
                            }}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Items)