// project import
import { getImageUrl, ImagePath } from 'utils/getImageUrl';
const GetAvatar = (name) => {
  const photo_new = `${name}.png`;
  return <img src={getImageUrl(`${photo_new}`, ImagePath.WIDGET)} alt="" className="img-20" />;
};

// Product table data
const ProductData = {
  wrapclass: 'table-card feed-card',
  height: '255px',
  title: 'New Products',
  tableheading: ['Product Name', 'Image', 'Status', 'Price', 'Action'],
  rowdata: [
    {
      name: 'HeadPhone',
      image: GetAvatar('p1'),
      status: {
        badge: 'light-warning',
        label: 'Pending'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Iphone 6',
      image: GetAvatar('p2'),
      status: {
        badge: 'light-danger',
        label: 'Cancel'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Jacket',
      image: GetAvatar('p3'),
      status: {
        badge: 'light-success',
        label: 'Success'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Sofa',
      image: GetAvatar('p4'),
      status: {
        badge: 'light-danger',
        label: 'Cancel'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'HeadPhone',
      image: GetAvatar('p1'),
      status: {
        badge: 'light-warning',
        label: 'Pending'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Iphone 6',
      image: GetAvatar('p2'),
      status: {
        badge: 'light-danger',
        label: 'Cancel'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Jacket',
      image: GetAvatar('p3'),
      status: {
        badge: 'light-success',
        label: 'Success'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Sofa',
      image: GetAvatar('p4'),
      status: {
        badge: 'light-danger',
        label: 'Cancel'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'HeadPhone',
      image: GetAvatar('p1'),
      status: {
        badge: 'light-warning',
        label: 'Pending'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Iphone 6',
      image: GetAvatar('p2'),
      status: {
        badge: 'light-danger',
        label: 'Cancel'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Jacket',
      image: GetAvatar('p3'),
      status: {
        badge: 'light-success',
        label: 'Success'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    },
    {
      name: 'Sofa',
      image: GetAvatar('p4'),
      status: {
        badge: 'light-danger',
        label: 'Cancel'
      },
      price: '$10',
      action: [
        {
          icon: 'edit',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'trash-2',
          textcls: 'danger',
          link: '#'
        }
      ]
    }
  ]
};

export default ProductData;
